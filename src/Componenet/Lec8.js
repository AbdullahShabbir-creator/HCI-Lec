import React from 'react';
import { Link } from 'react-router-dom';

function Lec8() {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg animate__animated animate__fadeInUp">
                <div className="card-body">
                    <h1 className="card-title text-center text-primary">Lec 8: Guidelines of Good User Interface</h1>

                    <div className="row">
                        {/* Video Section - Left Side */}
                        <div className="col-md-6">
                            <div className="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3lU3gBMael0?si=5aJOVaDbXygrQjga" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="topics">
                                <h3 className="text-primary">Topics Covered in Guidelines of Good UI</h3>
                                <ul>
                                    <li><strong>1-</strong> Clear Visual Design</li>
                                    <li><strong>2-</strong> Consistent Layout</li>
                                    <li><strong>3-</strong> Easy Navigation and Accessibility</li>
                                    <li><strong>4-</strong> Feedback Mechanisms</li>
                                    <li><strong>5-</strong> Performance Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lecture-details mt-4">
                        <h3 className="text-secondary">Lecture Summary</h3>
                        <p className="lead">
                            This lecture provides the essential guidelines that designers should follow to create good user interfaces. From clarity in visual design to providing adequate feedback, these principles ensure that the interface is usable and efficient.
                        </p>
                        <p className="lead">
                            <strong>Key Concepts:</strong>
                            <ul>
                                <li><strong>Clarity</strong>: Designing an interface that is clear and easy to understand.</li>
                                <li><strong>Consistency</strong>: Ensuring uniformity in design elements and actions across the system.</li>
                                <li><strong>Navigation</strong>: Simplifying user navigation and enhancing accessibility for all users.</li>
                                <li><strong>Feedback</strong>: Providing users with immediate feedback for their actions to improve the experience.</li>
                                <li><strong>Performance</strong>: Optimizing the interface to ensure fast loading and responsiveness.</li>
                            </ul>
                        </p>
                        <p className="lead">
                            By adhering to these guidelines, designers can create user interfaces that provide a seamless, satisfying experience for users, improving the usability and effectiveness of the system.
                        </p>
                        <p className="lead">
                            <strong>Explore More:</strong> Additional resources on UI design guidelines and best practices will help refine your design skills.
                        </p>
                         <Link to="/week5" className="btn btn-outline-primary">See Weekly Lecture</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lec8;
