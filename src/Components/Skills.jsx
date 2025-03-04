import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTools } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const iconMap = {
    faReact: faReact,
    faCode: faCode,
    faDatabase: faDatabase,
    faTools: faTools
  };
  useEffect(() => {
    // Fetch skills data from the API
    axios.get('https://abdulzabbar.vercel.app/port_folio/skills/')
      .then((response) => {
        console.log(response.data);
        setSkills(response.data); // Set the skills data to state
        setLoading(false); // Data is loaded
      })
      .catch((error) => {
        setError('Error fetching data'); // Handle errors
        setLoading(false); // Done loading
      });
  }, []); // Empty dependency array to run once when the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div id="skills" className="bg-base-100 text-gray-800 py-12 px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">My Skills</h2>
        <p className="text-lg text-gray-600 mb-6">
          Here are some of the **technologies and tools** I specialize in to build efficient and scalable applications.
        </p>
      </div>

      {/* Horizontal scrolling container */}
      <div className="overflow-x-auto max-w-full">
        <div className="flex gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card bg-white shadow-xl p-6 border rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl min-w-[300px] flex-shrink-0"
            >
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={iconMap[skill.icon]} className="text-primary text-3xl" />
                <h3 className="text-xl font-semibold ml-2 text-gray-900">{skill.category}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700">
                {skill.items.split(",").map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
