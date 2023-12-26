import { useState } from 'react'

const useForm = ( inicialState = {} ) => {
  
    const [simpleForm, setSimpleForm] = useState( inicialState ) ;

        const handleInputChange = ( {target} ) => {
            //console.log(target) ; 
            setSimpleForm({
                ...simpleForm,
                [ target.name ] : target.value,
            })
        }

        const reload = () => {
            setSimpleForm( inicialState )
         }

        return {
            ...simpleForm,
            HIC: handleInputChange,
            reload: reload,
        }
}

export default useForm
