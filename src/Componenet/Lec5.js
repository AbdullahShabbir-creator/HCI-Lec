import React from 'react';
import { Link } from 'react-router-dom';

function Lec5() {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg animate__animated animate__fadeInUp">
                <div className="card-body">
                    <h1 className="card-title text-center text-primary">Lec 5: Design Guidelines</h1>

                    <div className="row">
                        {/* Video Section - Left Side */}
                        <div className="col-md-6">
                            <div className="video-container">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/aqYPwsH827M?si=gF_AYHU2pSZ4Q6EO"
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="topics">
                                <h3 className="text-primary">Topics Covered in Design Guidelines</h3>
                                <ul>
                                    <li><strong>1-</strong> Principles of user-centered design</li>
                                    <li><strong>2-</strong> Consistency in UI elements</li>
                                    <li><strong>3-</strong> Accessibility and inclusivity in design</li>
                                    <li><strong>4-</strong> Importance of feedback and responsiveness</li>
                                    <li><strong>5-</strong> Visual hierarchy and layout considerations</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lecture-details mt-4">
                        <h3 className="text-secondary">Lecture Summary</h3>
                        <p className="lead">
                            In this lecture, we dive into the design principles that ensure a user interface is functional, efficient, and easy to navigate. The focus is on establishing design guidelines that enhance the usability and accessibility of applications. Design guidelines are essential to creating interfaces that users find intuitive and easy to interact with.
                        </p>
                        <p className="lead">
                            <strong>Key Concepts:</strong>
                            <ul>
                                <li><strong>User-Centered Design</strong>: Focus on the needs, preferences, and limitations of users when designing interfaces.</li>
                                <li><strong>Consistency</strong>: Ensuring that design elements (such as buttons, icons, and menus) are consistent throughout the application to reduce cognitive load.</li>
                                <li><strong>Accessibility</strong>: Designing for all users, including those with disabilities, ensuring that your interface is usable for everyone.</li>
                                <li><strong>Feedback and Responsiveness</strong>: Providing timely feedback to users on their actions, ensuring they understand the outcome of their interactions with the system.</li>
                                <li><strong>Visual Hierarchy</strong>: Organizing elements in a way that guides the user's attention and helps them understand the relative importance of information.</li>
                            </ul>
                        </p>
                        <p className="lead">
                            By following these design guidelines, you can create interfaces that are not only aesthetically pleasing but also functional, usable, and accessible. The goal is to ensure that users can easily interact with the system and accomplish their tasks effectively.
                        </p>
                        <p className="lead">
                            <strong>Explore More:</strong> To gain a deeper understanding of design guidelines, additional readings and case studies on successful UI design can help reinforce these principles and show how they are applied in real-world scenarios.
                        </p>
                        <Link to="/lec6" className="btn btn-outline-primary">See Lecture 6</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lec5;
