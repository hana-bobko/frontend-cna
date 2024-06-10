import { createContext, useContext, useEffect, useReducer, useRef } from "react";

const HANDLERS = {
    INITIALIZE: "INITIALIZE",
    SIGN_IN: "SIGN_IN",
    SIGN_OUT: "SIGN_OUT",
};

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null,
};

const handlers = {
    [HANDLERS.INITIALIZE]: (state, action) => {
        const user = action.payload;

        return {
            ...state,
            ...// if payload (user) is provided, then is authenticated
            (user
                ? {
                      isAuthenticated: true,
                      isLoading: false,
                      user,
                  }
                : {
                      isLoading: false,
                  }),
        };
    },
    [HANDLERS.SIGN_IN]: (state, action) => {
        const user = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    [HANDLERS.SIGN_OUT]: (state) => {
        return {
            ...state,
            isAuthenticated: false,
            user: null,
        };
    },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);
    const initialized = useRef(false);

    const initialize = async () => {
        // Prevent from calling twice in development mode with React.StrictMode enabled
        if (initialized.current) {
            return;
        }

        initialized.current = true;

        let isAuthenticated = false;

        try {
            isAuthenticated = window.sessionStorage.getItem("authenticated") === "true";
        } catch (err) {
            console.error(err);
        }

        if (isAuthenticated) {
            const user = {
                id: "5e86809283e28b96d2d38537",
                avatar: "/assets/avatars/avatar-anika-visser.png",
                name: "Maria Silva",
                email: "maria.silva@cna.com.br",
            };

            dispatch({
                type: HANDLERS.INITIALIZE,
                payload: user,
            });
        } else {
            dispatch({
                type: HANDLERS.INITIALIZE,
            });
        }
    };

    useEffect(
        () => {
            initialize();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const skip = () => {
        try {
            window.sessionStorage.setItem("authenticated", "true");
        } catch (err) {
            console.error(err);
        }

        const user = {
            id: "5e86809283e28b96d2d38537",
            avatar: "/assets/avatars/avatar-anika-visser.png",
            name: "TI | Onda Segura",
            email: "anika.visser@ondaseg.com.br",
        };

        dispatch({
            type: HANDLERS.SIGN_IN,
            payload: user,
        });
    };

    async function signIn(data) {
        try {
            window.localStorage.setItem("auth_user", JSON.stringify(data));
            window.sessionStorage.setItem("authenticated", "true");
            const user = {
                id: "5e86809283e28b96d2d38537",
                avatar: "/assets/avatars/avatar-anika-visser.png",
                name: data.nome,
                email: data.email,
            };
            dispatch({
                type: HANDLERS.SIGN_IN,
                payload: user,
            });
        } catch (error) {
            console.log(error);
            throw new Error(error.response.data.message);
        }
    }

    const signUp = async (data) => {
        try {
            window.sessionStorage.setItem("authenticated", "true");
            window.localStorage.setItem("auth_user", JSON.stringify(data));
            const user = {
                id: "5e86809283e28b96d2d38537",
                avatar: "/assets/avatars/avatar-anika-visser.png",
                name: data.nome,
                email: data.email,
            };
            dispatch({
                type: HANDLERS.SIGN_IN,
                payload: user,
            });
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    };

    const signOut = () => {
        window.sessionStorage.removeItem("authenticated");
        dispatch({
            type: HANDLERS.SIGN_OUT,
        });
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                skip,
                signIn,
                signUp,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
