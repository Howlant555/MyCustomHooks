import { useEffect, useRef, useState } from "react"


const useFetch = ( url ) => {
    
    const isMounted = useRef( true )
    const [ state, setState ] = useState( { data: null, loading: true, error: null } )
    
    useEffect( () => {

        return () => {
            isMounted.current = false ;
        }

    }, [])

    useEffect( () => {

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                
                if( isMounted ) {
                    setState({
                        data,
                        loading: false,
                        error: null,
                    })
                }
                else {
                    console.log("No se obtubo el valor de la API")
                }  

            })
    }, [ url ] )


    return state ;

}

export default useFetch
