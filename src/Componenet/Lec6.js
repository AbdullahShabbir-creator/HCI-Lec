import React from 'react';
import { Link } from 'react-router-dom';

function Lec6() {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg animate__animated animate__fadeInUp">
                <div className="card-body">
                    <h1 className="card-title text-center text-primary">Lec 6: User Interface Styles</h1>

                    <div className="row">
                        {/* Video Section - Left Side */}
                        <div className="col-md-6">
                            <div className="video-container">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/vq3LQifjvh0?si=qeBGg2P8Mde0JmZU"
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="topics">
                                <h3 className="text-primary">Topics Covered in User Interface Styles</h3>
                                <ul>
                                    <li><strong>1-</strong> Different UI styles: graphical, textual, and more</li>
                                    <li><strong>2-</strong> Command-line vs graphical user interfaces</li>
                                    <li><strong>3-</strong> Modern UI design trends</li>
                                    <li><strong>4-</strong> Minimalism and flat design</li>
                                    <li><strong>5-</strong> Customizable user interfaces</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lecture-details mt-4">
                        <h3 className="text-secondary">Lecture Summary</h3>
                        <p className="lead">
                            This lecture explores the different styles of user interfaces (UI) and how each style impacts user experience. From traditional command-line interfaces (CLI) to modern graphical user interfaces (GUI), we will examine the characteristics of various styles and how they cater to different user needs. The discussion also includes current UI design trends, such as minimalism, flat design, and customizable interfaces.
                        </p>
                        <p className="lead">
                            <strong>Key Concepts:</strong>
                            <ul>
                                <li><strong>Graphical User Interface (GUI)</strong>: Interfaces that use visual elements like icons, buttons, and windows for interaction.</li>
                                <li><strong>Command-Line Interface (CLI)</strong>: Text-based interfaces where users input commands directly.</li>
                                <li><strong>Modern UI Trends</strong>: Minimalistic design, flat design, and focus on usability and aesthetics.</li>
                                <li><strong>Customization</strong>: The ability for users to personalize their interfaces for a more tailored experience.</li>
                                <li><strong>Responsive Design</strong>: Ensuring that interfaces adapt to different screen sizes, especially for mobile devices.</li>
                            </ul>
                        </p>
                        <p className="lead">
                            By understanding the various UI styles and their design implications, you can choose the most appropriate style for your application based on user needs and context. Each UI style has its strengths and weaknesses, and the key is to design for the user's comfort and effectiveness.
                        </p>
                        <p className="lead">
                            <strong>Explore More:</strong> Additional resources on UI styles and design principles can help deepen your understanding of how to create intuitive and aesthetically pleasing interfaces.
                        </p>
                        <Link to="/lec7" className="btn btn-outline-primary">See Lecture 7</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lec6;
