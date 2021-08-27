import { useState } from "react";

// de esta manera se le pude poner tipado generico a las arrow functions
export const useForm = <T extends Object>(values: T) => {
    const [formValues, setFormValues] = useState(values);

    const handlerChange = (nameInput: string, inputValue: string): void => {
        setFormValues({
            ...formValues,
            [nameInput]: inputValue,
        });
    };

    return { formValues, handlerChange };


}