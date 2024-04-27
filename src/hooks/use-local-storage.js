export default function useLocalStorage() {
  function adicionarItemLocalStorage(chave, novoItem) {
    try {
      const valorAtual = window.localStorage.getItem(chave);

      const listaAtual = valorAtual ? JSON.parse(valorAtual) : [];

      const newDataItem = {
        ...listaAtual,
        ...novoItem,
      };
      window.localStorage.setItem(chave, JSON.stringify(newDataItem));
    } catch (error) {
      console.log(error);
    }
  }

  function setLocalStorageSemIncremento(chave, novoItem) {
    try {
      window.localStorage.setItem(chave, JSON.stringify(novoItem));
    } catch (error) {
      console.log(error);
    }
  }

  function getItemLocalStorage(chave) {
    try {
      // Obter o valor atual da chave
      if (typeof window !== "undefined") {
        const valorAtual = window.localStorage.getItem(chave);
        return valorAtual ? JSON.parse(valorAtual) : valorAtual;
      }

      return;
    } catch (error) {
      console.log(error);
    }
  }

  function removerItemLocalStorage(chave) {
    try {
      window.localStorage.removeItem(chave);
    } catch (error) {
      console.log(error);
    }
  }
  return {
    adicionarItemLocalStorage,
    getItemLocalStorage,
    removerItemLocalStorage,
    setLocalStorageSemIncremento,
  };
}
