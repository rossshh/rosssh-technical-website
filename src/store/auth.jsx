import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");
    const [isLoading,setIsLoading]=useState(true);
    const [services, setServices]=useState([]);
    const authenticationToken=`Bearer ${token}`;

    const storeTokenInLS=(serverToken)=>{
        setToken(serverToken);
        localStorage.setItem('token',serverToken);
    };
    //LOGOUT FUNCTION
    const isLoggedIn= !!token ;
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    };
    //JWT AUTHENTICATION - to get current user info
    const userAuthentication=async()=>{
        try{
            setIsLoading(true);
            const response=await fetch(`https://rosssh-technical-10y1.onrender.com/api/auth/user`,{
                method:"GET",
                headers:{
                    Authorization: authenticationToken,
                }
            });
            if(response.ok)
            {
                const data=await response.json();
                console.log("user data ",data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }
            else{
                setIsLoading(false);
            }
        }
        catch(error)
        {
            console.error(error);
        }
    };
    useEffect(()=>{
        userAuthentication();
    },[]);

    // SERVICES DATA FETCHING
    
    const getServices=async(req,res)=>{
        try {
            const response=await fetch(`https://rosssh-technical-10y1.onrender.com/api/data/service`,{
                method:"GET",
            });
            
            if(response.ok)
            {
                const data=await response.json();
                console.log("Service Data:",data.serviceData);
                setServices(data.serviceData);
            }
        } catch (error) {
            console.log("error in fetching service data");
        }
    };
    useEffect(()=>{
        getServices();
    },[]);

    return(
        <AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser,user,services,authenticationToken,isLoading,API}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);
    if(!authContextValue)
    {
        console.log("wrap in main please");
    }
    return authContextValue;
}
