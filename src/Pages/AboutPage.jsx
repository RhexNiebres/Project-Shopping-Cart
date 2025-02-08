import sample from "../assets/sample.webp";

function About() {
  return (
<div 
  className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-8"
  style={{ backgroundImage: `url(${sample})` }}
>

  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
  <div className="relative z-10 text-center">
    <h1 className="text-3xl font-bold text-white">About</h1>
    <p className="bg-black bg-opacity-50 p-4 rounded-md">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas optio sunt iure?
    </p>
    <p className="bg-black bg-opacity-50 p-4 rounded-md">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dignissimos porro.
    </p>
  </div>
</div>

  );
}

export default About;

