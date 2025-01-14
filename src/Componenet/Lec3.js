import React from 'react';
import { Link } from 'react-router-dom';

function Lec3() {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg animate__animated animate__fadeInUp">
                <div className="card-body">
                    <h1 className="card-title text-center text-primary">Lec 3: Visual Perception in HCI</h1>

                    <div className="row">
                        {/* Video Section - Left Side */}
                        <div className="col-md-6">
                            <div className="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/jzUkeus2Zmk?si=SEUeKHcMsBTT2bYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="topics">
                                <h3 className="text-primary">Topics Covered in Visual Perception in HCI</h3>
                                <ul>
                                    <li><strong>1-</strong>Understanding Visual Perception</li>
                                    <li><strong>2-</strong>How the Brain Processes Visual Information</li>
                                    <li><strong>3-</strong>Color Theory and Its Importance in Design</li>
                                    <li><strong>4-</strong>Contrast Sensitivity and Visual Clarity</li>
                                    <li><strong>5-</strong>Gestalt Principles of Visual Organization</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lecture-details mt-4">
                        <h3 className="text-secondary">Lecture Summary</h3>
                        <p className="lead">
                            In this lecture, we will explore how human visual perception impacts the design of user interfaces. Visual perception is the process by which the brain interprets and organizes visual stimuli to make sense of the surrounding environment. Understanding how users perceive visual information is crucial in designing intuitive and efficient interfaces.
                        </p>
                        <p className="lead">
                            <strong>Key Concepts:</strong>
                            <ul>
                                <li><strong>Visual Perception:</strong> How the brain interprets visual stimuli and how this affects the design of interfaces.</li>
                                <li><strong>Color Theory:</strong> The study of colors and how they are used in design to evoke emotions, create hierarchy, and improve usability.</li>
                                <li><strong>Contrast Sensitivity:</strong> The ability to distinguish objects from the background, which is important for readability and accessibility.</li>
                                <li><strong>Gestalt Principles:</strong> How the brain organizes visual elements into groups, helping designers create clear and easy-to-understand interfaces.</li>
                                <li><strong>Visual Hierarchy:</strong> The arrangement of elements on a screen to guide users' attention in a logical flow.</li>
                            </ul>
                        </p>
                        <p className="lead">
                            Understanding these visual perception principles helps designers create user interfaces that are easy to navigate and visually appealing. Proper use of color, contrast, and grouping can significantly improve the user experience by reducing cognitive load and enhancing usability.
                        </p>
                        <p className="lead">
                            <strong>Explore More:</strong> To deepen your understanding, additional readings and case studies are available, exploring how visual perception is applied in real-world UI design.
                        </p>
                        <Link to="/lec4" className="btn btn-outline-primary">See Lecture 4</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lec3;
