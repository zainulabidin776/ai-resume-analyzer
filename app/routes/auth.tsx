import { usePuterStore } from "../lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export const meta = () => ([
     { title : 'Resumind | Auth'},
     { name : 'description' , content : 'Log into your account'},


])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next: string = location.search.split('next=')[1];
    const navigate = useNavigate();


    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);

    }, [auth.isAuthenticated])
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
        <div className="gradient-border shadow-lg w-full max-w-md">
            <section className="flex flex-col gap-8 bg-white/95 backdrop-blur-sm rounded-2xl p-10 items-center text-center shadow-xl border border-gray-200/60">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-5xl font-bold">
                        <span className="text-gray-800">Wel</span>
                        <span className="text-indigo-600">come</span>
                    </h1>
                    <h2 className="text-lg text-gray-600 font-medium">
                        Log In to Continue Your Job Journey
                    </h2>
                </div>

                <div className="w-full">
                   {isLoading ? (
                    <button className="auth-button animate-pulse w-full">
                        Signing you in...
                    </button>
                   ): (
                      <>
                         {auth.isAuthenticated ? (
                            <button className="auth-button w-full" onClick={auth.signOut}> 
                               Log Out
                            </button>
  
                         ): (
                            <button className="auth-button w-full" onClick={auth.signIn}>
                                Log In
                            </button>

                         )
                         
                         }
                      
                      </>
                   )}
                
                </div> 

            </section>
        </div>
    </main>
  )
}

export default Auth