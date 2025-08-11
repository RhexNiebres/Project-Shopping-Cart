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
    <div className="flex h-screen w-screen flex-col">
      <div className="mb-6 flex flex-col items-center justify-center bg-orange-500 p-6">
        <h1 className="text-6xl font-bold text-white p-2">Cartsy</h1>
        <p className="text-white font-semibold">Reliable | Fast | Effortless | Quality</p>
      </div>
      <WelcomeCard />
    </div>
  );
}

export default About;
