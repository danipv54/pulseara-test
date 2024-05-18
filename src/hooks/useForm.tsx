import { useState } from 'react';

export const useNewProcedure = (initialValue={}) => {

    const [formState, setFormState] = useState(initialValue);

    const onInputChange=({target}:any)=>{
        const {value,name}= target;

        setFormState({
            ...formState,
            [name]:value
        })
    }

    const resetForm = () => {
        setFormState({});
      };
  return {
    ...formState,
    formState,
    onInputChange,
    resetForm,
  }
}
