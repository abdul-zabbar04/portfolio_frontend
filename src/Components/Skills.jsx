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
    axios.get('https://abdulzabbar.vercel.app/port_folio/skills/')
      .then((response) => {
        setSkills(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-xl text-center py-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <div id="skills" className="bg-base-100 text-gray-800 py-12 px-6 md:px-24 pt-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">My Skills</h2>
        <p className="text-lg text-gray-600 mb-6">
          Here are some of the <strong>technologies and tools</strong> I specialize in to build efficient and scalable applications.
        </p>
      </div>

      {/* Skills grid - Responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
          >
            <FontAwesomeIcon icon={iconMap[skill.icon]} className="text-primary text-4xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              {skill.items.split(",").map((item, idx) => (
                <li key={idx} className="text-base">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
