import {Link} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import {useEffect, useState} from "react";
import {usePuterStore} from "~/lib/puter";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
    const { fs } = usePuterStore();
    const [resumeUrl, setResumeUrl] = useState('');

    useEffect(() => {
        const loadResume = async () => {
            const blob = await fs.read(imagePath);
            if(!blob) return;
            let url = URL.createObjectURL(blob);
            setResumeUrl(url);
        }

        loadResume();
    }, [imagePath]);

    return (
        <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000 group">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
            {companyName && <h2 className="!text-black font-bold break-words group-hover:text-indigo-600 transition-colors duration-300">{companyName}</h2>}
            {jobTitle && <h3 className="text-lg break-words text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{jobTitle}</h3>}
                    {!companyName && !jobTitle && <h2 className="!text-black font-bold group-hover:text-indigo-600 transition-colors duration-300">Resume</h2>}
                </div>
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>
            {resumeUrl && (
                <div className="gradient-border animate-in fade-in duration-1000 group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="w-full h-full relative">
                        <img
                            src={resumeUrl}
                            alt="resume"
                            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <p className="text-sm font-medium">View Details →</p>
                        </div>
                    </div>
                </div>
                )}
        </Link>
    )
}
export default ResumeCard