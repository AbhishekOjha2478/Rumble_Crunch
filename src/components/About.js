import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
      <h2 className="text-xl text-gray-700">This is the about us page</h2>
      <UserClass />
    </div>
  );
};

export default About;
