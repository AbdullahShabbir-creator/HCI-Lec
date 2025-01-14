import React from 'react';
import { Link } from 'react-router-dom';

function Lec1() {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg animate__animated animate__fadeInUp">
                <div className="card-body">
                    <h1 className="card-title text-center text-primary">Lec 1: Introduction to HCI</h1>

                    <div className="row">
                        {/* Video Section - Left Side */}
                        <div className="col-md-6">
                            <div className="video-container">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/PCjP7emhm7M?si=R9_s4fO1FEon4FNO"
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="topics">
                                <h3 className="text-primary">Topics Covered in Introduction to HCI</h3>
                                <ul>
                                    <li><strong>1-</strong>Overview of Human-Computer Interaction (HCI)</li>
                                    <li><strong>2-</strong>Importance of HCI in technology design</li>
                                    <li><strong>3-</strong>Understanding user interfaces (UI) and user experience (UX)</li>
                                    <li><strong>4-</strong>Introduction to usability and user-centered design</li>
                                    <li><strong>5-</strong>The role of psychology in HCI</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lecture-details mt-4">
                        <h3 className="text-secondary">Lecture Summary</h3>
                        <p className="lead">
                            In this lecture, we dive into the models that explain how humans process information, which is fundamental in designing effective and intuitive human-computer interfaces. Human information processing models describe the cognitive mechanisms used by humans to receive, process, store, and retrieve information. These models guide the design of systems and technology that align with human cognitive abilities, improving user experiences.
                        </p>
                        <p className="lead">
                            <strong>Key Concepts:</strong>
                            <ul>
                                <li><strong>Cognitive Models</strong>: These explain the steps involved in human thinking, memory, decision-making, and perception.</li>
                                <li><strong>Sensory and Short-Term Memory</strong>: How information is initially processed and stored for immediate use.</li>
                                <li><strong>Long-Term Memory</strong>: How information is encoded, stored, and retrieved for future use.</li>
                                <li><strong>Attention and Perception</strong>: How we focus on relevant information and interpret sensory inputs.</li>
                                <li><strong>Design Implications</strong>: Insights from these models help interface designers create systems that are easier to use, taking cognitive limitations into account.</li>
                            </ul>
                        </p>
                        <p className="lead">
                            By understanding these models, designers can create user interfaces that are not only more efficient but also align with how humans naturally think and process information. The goal is to reduce cognitive load and improve usability.
                        </p>
                        <p className="lead">
                            <strong>Explore More:</strong> If you'd like to explore this topic further, additional readings, case studies, and research discussions can provide deeper insights into how these models are applied in real-world interface design and the development of intuitive systems.
                        </p>
                        <Link to="/lec2" className="btn btn-outline-primary">See Lecture 2</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lec1;
