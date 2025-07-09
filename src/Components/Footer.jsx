import { Github } from "lucide-react";

function Footer() {
  return (
    <footer className="sticky bottom-0 flex w-full h-full items-center justify-center gap-x-4 bg-orange-600 p-2 text-center text-black">
      <p className="font-semibold text-white">
        &copy; {new Date().getFullYear()} Rhex Niebres. All rights reserved.
      </p>
      <a
        href="https://github.com/RhexNiebres"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-md p-1 text-white transition-transform duration-200 hover:scale-110 hover:text-black"
      >
        <div className="flex items-center ">
          <Github size={20} />
          <span>Github</span>
        </div>
      </a>
    </footer>
  );
}

export default Footer;
