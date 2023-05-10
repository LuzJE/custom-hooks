import { useState } from 'react';

export const useCounter = ( initialValue = 100 ) => {

    const [ counter, setCounter ] = useState(initialValue);

    const increment = ( value = 1 ) => {
        // setCounter( counter + value );
        setCounter((current) => current + value);
    }

    const decrement = ( value = 1 ) => {

        if ( counter === 0 ) return;

        // setCounter( counter - value );
        setCounter( (current) => current - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,   // Es como tener counter: counter
        increment,
        decrement,
        reset
    }
}