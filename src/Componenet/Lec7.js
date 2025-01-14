import React from 'react';
import { Link } from 'react-router-dom';

function Lec7() {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg animate__animated animate__fadeInUp">
                <div className="card-body">
                    <h1 className="card-title text-center text-primary">Lec 7: Good User Interface</h1>

                    <div className="row">
                        {/* Video Section - Left Side */}
                        <div className="col-md-6">
                            <div className="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/_ALni56svDA?si=UUV7Q0VsDCZeAW64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="topics">
                                <h3 className="text-primary">Topics Covered in Good User Interface</h3>
                                <ul>
                                    <li><strong>1-</strong> Characteristics of a Good UI</li>
                                    <li><strong>2-</strong> Usability and Accessibility</li>
                                    <li><strong>3-</strong> Intuitive and User-Friendly Design</li>
                                    <li><strong>4-</strong> Efficient Navigation</li>
                                    <li><strong>5-</strong> Visual Hierarchy and Consistency</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lecture-details mt-4">
                        <h3 className="text-secondary">Lecture Summary</h3>
                        <p className="lead">
                            In this lecture, we explore the key characteristics that define a good user interface. A good UI improves usability, accessibility, and overall user satisfaction. We discuss how design elements such as simplicity, intuitive navigation, and consistency enhance the user experience.
                        </p>
                        <p className="lead">
                            <strong>Key Concepts:</strong>
                            <ul>
                                <li><strong>Usability</strong>: The ease with which users can accomplish tasks in a system.</li>
                                <li><strong>Accessibility</strong>: Ensuring that the interface is usable by people with various abilities.</li>
                                <li><strong>Intuitive Design</strong>: Creating a UI that users can understand without extensive instructions.</li>
                                <li><strong>Efficiency</strong>: How quickly and effectively users can perform tasks.</li>
                                <li><strong>Consistency</strong>: Ensuring that design elements behave predictably across the system.</li>
                            </ul>
                        </p>
                        <p className="lead">
                            By understanding these characteristics, UI designers can create interfaces that enhance user satisfaction and performance.
                        </p>
                        <p className="lead">
                            <strong>Explore More:</strong> Further reading on UI design principles and case studies can help you refine your understanding of good user interface design.
                        </p>
                        <Link to="/lec8" className="btn btn-outline-primary">See Lecture 8</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lec7;
