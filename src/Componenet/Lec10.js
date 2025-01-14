import React from 'react';
import { Link } from 'react-router-dom';

function Lec10() {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg animate__animated animate__fadeInUp">
                <div className="card-body">
                    <h1 className="card-title text-center text-primary">Lec 10: WIMP Interface</h1>

                    <div className="row">
                        {/* Video Section - Left Side */}
                        <div className="col-md-6">
                            <div className="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/lixqP7zDHnw?si=P9G1AQvAcAlzpdhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="topics">
                                <h3 className="text-primary">Topics Covered in WIMP Interface</h3>
                                <ul>
                                    <li><strong>1-</strong> Introduction to WIMP Interface</li>
                                    <li><strong>2-</strong> Components: Windows, Icons, Menus, and Pointers</li>
                                    <li><strong>3-</strong> Evolution of WIMP Interfaces</li>
                                    <li><strong>4-</strong> Role of WIMP in Graphical User Interfaces</li>
                                    <li><strong>5-</strong> WIMP vs. Other Interface Paradigms</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lecture-details mt-4">
                        <h3 className="text-secondary">Lecture Summary</h3>
                        <p className="lead">
                            In this lecture, we will examine the WIMP interface, which is the backbone of many modern graphical user interfaces. WIMP stands for Windows, Icons, Menus, and Pointers, the four key components that allow users to interact with the system in an efficient and user-friendly way.
                        </p>
                        <p className="lead">
                            <strong>Key Concepts:</strong>
                            <ul>
                                <li><strong>Windows</strong>: The concept of displaying multiple tasks or applications in separate visual areas.</li>
                                <li><strong>Icons</strong>: Graphical representations of applications or files that users can interact with.</li>
                                <li><strong>Menus</strong>: A list of options or commands that provide access to various features.</li>
                                <li><strong>Pointers</strong>: The device (such as a mouse) used to interact with the interface elements.</li>
                                <li><strong>Comparison</strong>: Comparing WIMP to other user interface models such as command-line interfaces and touch-based systems.</li>
                            </ul>
                        </p>
                        <p className="lead">
                            By understanding the WIMP interface, designers can create systems that take advantage of these powerful and intuitive components.
                        </p>
                        <p className="lead">
                            <strong>Explore More:</strong> Further research into the history and development of WIMP interfaces will provide a deeper understanding of how they shaped modern computing.
                        </p>
                        <Link to="/week5" className="btn btn-outline-primary">See Weekly Lecture</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lec10;
