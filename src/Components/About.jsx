import React, { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [academics, setAcademics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      axios
          .get("http://127.0.0.1:8000/port_folio/academic/")
          .then((response) => {
              setAcademics(response.data); // Set the response data to state
              setLoading(false); // Set loading to false after data is fetched
          })
          .catch((error) => {
              console.error("Error fetching projects data: ", error);
              setLoading(false); // Set loading to false even in case of error
          });
  }, []);
  // If loading, display a loading message or spinner
  if (loading) {
      return (
          <div className="text-center py-10">
              <h2>Loading...</h2>
          </div>
      );
  }
  return (
    <div id="about" className="bg-base-100 text-gray-800 py-12 px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
        <p className="text-lg text-gray-600 mb-6">
          Hi, I am <span className="font-bold text-secondary">Abdul Zabbar</span>, an Electrical and Electronic Engineering Student and a passionate
          Backend Web Developer from Bangladesh. With a strong foundation in coding and an eye for detail, I
          specialize in creating efficient, scalable, and user-friendly web applications. Currently, I'm expanding my skills by learning React for frontend development to build full-stack solutions.
        </p>
      </div>
  
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {academics.map((edu, index) => (
          <div
            key={index}
            className="card bg-white shadow-xl p-6 border rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center mb-4">
              <span className="text-green-600 text-3xl">🎓</span>
              <h3 className="text-xl font-semibold ml-2 text-gray-900">{edu.institution}</h3>
            </div>
            <p className="text-gray-700">{edu.degree}</p>
            <p className="text-gray-500">{edu.years}</p>
            {edu.degree === "B.Sc. in EEE" && edu.gpa ? (
              <p className="text-gray-700 font-semibold">CGPA: {edu.gpa}</p>
            ) : (
              edu.gpa && <p className="text-gray-700 font-semibold">GPA: {edu.gpa}</p>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
