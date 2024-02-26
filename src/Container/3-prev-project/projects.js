
import React, { useState } from "react";
import './projects.css';
import { Projects } from "../../data";

const PrevProjects = () => {
    const [SelectedProjectId, setSelectedProjectId] = useState(null);

    const openPopup = (projectId) => {
        setSelectedProjectId(projectId);
    };
    const closePopup = () => {
        setSelectedProjectId(null);
    };

    return (
        <div>
            <div className="headline">
                <h1>P R O J E C T S</h1>
            </div>
            <div className="project-details">
                {Projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <div className="project-thumbnail">
                            <img src={project.thumbnail}></img>
                        </div>
                        <div className="project-deets">
                            <h1>{project.name}</h1>
                            <button onClick={() => openPopup(project.id)}>
                                view more
                            </button>
                        </div>
                        {SelectedProjectId === project.id && (
                            <div className="project-pop-up">
                                <div>
                                    <div className="project-info">
                                        <div className="project-info-name">
                                            <h1>{project.name}</h1>
                                        </div>
                                        <div className="project-info-description">
                                            <h5>Description :
                                            <br></br>
                                            {project.description}
                                            </h5>
                                        </div>
                                        <div className="project-info-problem">
                                            <h5><u>Problem : </u>
                                            <br></br>
                                            {project.problem}
                                            </h5>
                                        </div>
                                        <div className="project-info-solutions">
                                            <h5><u>Solutions : </u>
                                            <br></br>
                                            {project.solution}
                                            </h5>
                                        </div>
                                    </div>
                                    <button onClick={closePopup}>
                                        close popup
                                    </button>
                                </div>
                            </div>                                    
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PrevProjects;