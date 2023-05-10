import { useEffect, useState } from 'react';

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    // La dependencia que voy a colocar es url, es decir, que cada vez que el 
    //  url cambie entonces se va a disparar este useEffect, 
    //  si el url es el mismo entonces no hace nada
    useEffect(() => {
      getFetch();
    }, [url])
    
  return {
    data:      state.data,
    isLoading: state.isLoading,
    hasError:  state.hasError,
  };
}
