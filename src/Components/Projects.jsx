import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Projects = () => {
    // State to hold the projects data
    const [projects, setProjects] = useState([]);
    // State to handle loading state
    const [loading, setLoading] = useState(true);

    // Fetch projects data when the component mounts
    useEffect(() => {
        // Fetching the data using axios
        axios
            .get("http://127.0.0.1:8000/port_folio/projects/")
            .then((response) => {
                setProjects(response.data); // Set the response data to state
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
        <section id="projects" className="pt-12">
            <div className="container mx-auto px-6 py-6">
                <h2 className="text-4xl text-primary font-bold text-center mb-10">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="card w-full h-[420px] shadow-xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[220px] object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <div className="flex justify-between">
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="btn btn-outline btn-primary w-1/2 mr-2"
                                    >
                                        View Details
                                    </Link>
                                    <a
                                        href={project.live_frontend}
                                        className="btn btn-primary w-1/2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
