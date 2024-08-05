    import { createContext, useContext } from "react";

    export const LoginContext = createContext({
        registered: false,
        authenticated: false,
        login : ()=>{},
        logout: ()=>{},
    });

    export const useLoginContext = ()=>{
        return useContext(LoginContext);
    }