import { useEffect } from "react";
import WelcomeCard from "../Components/WelcomeCard";
function About() {
  useEffect(() => {
    // Hide scroll when this page is mounted
    document.body.style.overflow = "hidden";

    // Clean up (restore scroll when you leave the page)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="h-screen w-screen flex">
      <WelcomeCard />
    </div>
  );
}

export default About;
