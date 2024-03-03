import { useCallback, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import { useAuth } from "src/hooks/use-auth";
import { Layout as AuthLayout } from "src/layouts/auth/layout";
import Logo from "../../../public/assets/icons/love.png";

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [lembrarSenha, setLembrarSenha] = useState(false);
  const handleLembrarSenhaChange = (event) => {
    setLembrarSenha(event.target.checked);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("O e-mail precisa ser valido")
        .max(255)
        .required("Insira o e-mail"),
      password: Yup.string()
        .max(255)
        .min(6, "Deve conter no minimo 6 caracteres")
        .required("insira a senha"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values);
        router.push("/");
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Login | CNA</title>
      </Head>
      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mb: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={"/assets/icons/love.png"}
              sx={{
                height: 160,
                width: 160,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <Typography
              variant="h6"
              sx={{ fontSize: 40, color: "success.main" }}
            >
              Entrar
            </Typography>
          </Box>
          <div>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item lg={12} xs={12}>
                  <TextField
                    variant="standard"
                    size="small"
                    color="success"
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    label="Email"
                    name="email"
                    focused
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                    //   InputLabelProps={{
                    //     shrink: true,
                    //   }}
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                  <TextField
                    variant="standard"
                    size="small"
                    color="success"
                    autoComplete="password"
                    error={
                      !!(formik.touched.password && formik.errors.password)
                    }
                    fullWidth
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    focused
                    label="Senha"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Grid>
              </Grid>
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lembrarSenha}
                      onChange={handleLembrarSenhaChange}
                      color="primary"
                    />
                  }
                  sx={{ color: "#FFF", fontSize: 8 }}
                  label="Manter conectado(a)"
                />
                <Link
                  color="warning.main"
                  sx={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  variant="subtitle1"
                >
                  Esqueci minha senha
                </Link>
              </Box>
              <Grid item lg={8} xs={8}>
                <Button
                  fullWidth
                  size="medium"
                  sx={{
                    mt: 3,
                    borderRadius: 0.5,
                    bgcolor: "success.main",
                    "&:hover": { bgcolor: "success.main" },
                  }}
                  type="submit"
                  variant="contained"
                >
                  Entrar
                </Button>
              </Grid>

              <Box sx={{ pt: 2 }}>
                <Typography
                  color="text.secondary"
                  sx={{ color: "#fff" }}
                  variant="body2"
                >
                  Novo(a) por aqui?
                  <Link
                    sx={{ marginLeft: "10px" }}
                    component={NextLink}
                    href="/auth/register"
                    underline="hover"
                    variant="subtitle2"
                  >
                    Junte-se a nós
                  </Link>
                </Typography>
              </Box>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
