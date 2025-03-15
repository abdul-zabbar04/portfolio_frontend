import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://abdulzabbar.vercel.app/port_folio/project/${id}/`)
      .then((response) => {
        setProject(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{project?.title}</h1>
          <img
            src={project?.image}
            alt={project?.title}
            className="w-full rounded-lg shadow-md mt-4"
          />
        </div>

        {/* Features Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
          <p className="text-gray-700 mt-2">{project?.description || "No description listed."}</p>
        </div>

        {/* Technologies Used */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Technologies Used</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {project?.used_technology?.split(",").map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Project Links</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            {project?.live_frontend && (
              <a
                href={project.live_frontend}
                className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Frontend
              </a>
            )}
            {project?.live_backend && (
              <a
                href={project.live_backend}
                className="px-5 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Backend
              </a>
            )}
            {project?.github_frontend && (
              <a
                href={project.github_frontend}
                className="px-5 py-2 border border-gray-600 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Frontend
              </a>
            )}
            {project?.github_link_backend && (
              <a
                href={project.github_link_backend}
                className="px-5 py-2 border border-gray-600 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Backend
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
