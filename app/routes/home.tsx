import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "../components/ResumeCard";
import { useNavigate } from "react-router";
import { usePuterStore } from "../lib/puter";
import { useEffect } from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Your AI-powered resume Analyzer" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();
  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
 
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your Application and Resume Ratings</h1>
          <h2>Review your subbmissions and get feedback on your resume</h2>  
        </div>
      </section>


     {resumes.length > 0 && (

    <div className="resumes-section">

      {resumes.map((resume) => (

          <ResumeCard key={resume.id} resume={resume}/>
      ))}
    </div>

     )}


      
    </main>
  );
}
