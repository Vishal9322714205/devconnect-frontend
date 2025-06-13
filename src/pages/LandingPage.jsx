// // import React from "react";

// // const LandingPage = () => {
// //   return (
// //     <div className="bg-[#0D0D0D] text-white min-h-screen px-4 md:px-20 py-10">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-12">
// //         <h1 className="text-2xl font-bold">DevConnect</h1>
// //         <div className="space-x-4">
// //           <button className="bg-[#82D9D9] hover:bg-[#5fc6c6] text-black font-semibold px-4 py-2 rounded">
// //             Join DevConnect
// //           </button>
// //           <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black">
// //             Explore First
// //           </button>
// //         </div>
// //       </div>

// //       {/* Hero Section */}
// //       <div className="text-center max-w-3xl mx-auto mb-16">
// //         <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
// //           Where Developers <br /> Connect, Code, and Grow
// //         </h2>
// //         <div className="flex justify-center space-x-4">
// //           <button className="bg-[#82D9D9] text-black font-semibold px-6 py-3 rounded hover:bg-[#5fc6c6]">
// //             Join DevConnect
// //           </button>
// //           <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black">
// //             Explore First
// //           </button>
// //         </div>
// //       </div>

// //       {/* Illustration */}
// //       <div className="flex justify-center mb-16">
// //       <img src="/Assets/landing-hero.png" alt="DevConnect Illustration" />


// //       </div>

// //       {/* Features */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
// //         <div>
// //           <div className="text-2xl mb-2">💬</div>
// //           <h3 className="text-lg font-semibold">Group Chats</h3>
// //           <p className="text-gray-400">Discuss the latest tech trends</p>
// //         </div>
// //         <div>
// //           <div className="text-2xl mb-2">📨</div>
// //           <h3 className="text-lg font-semibold">Personal Message</h3>
// //           <p className="text-gray-400">Guidance and questions</p>
// //         </div>
// //         <div>
// //           <div className="text-2xl mb-2">📝</div>
// //           <h3 className="text-lg font-semibold">Micro-Blogs</h3>
// //           <p className="text-gray-400">Share tech knowledge</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LandingPage;
// // File: src/pages/LandingPage.jsx
// import React from 'react';
// import './LandingPage.css';

// const LandingPage = () => {
//   return (
//     <div className="landing-container">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="logo">
//           <span className="logo-icon"></span>
//           <h1>DevConnect</h1>
//         </div>
//         <div className="nav-buttons">
//           <button className="btn primary">Join DevConnect</button>
//           <button className="btn secondary">Explore First</button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h2>Where Developers <span className="highlight">Connect</span>, <span className="highlight">Code</span>, and <span className="highlight">Grow</span></h2>
//           <p>Join the fastest growing developer community. Collaborate, learn, and build amazing things together.</p>
//           <div className="cta-buttons">
//             <button className="btn primary large">Join DevConnect</button>
//             <button className="btn secondary large">Explore First</button>
//           </div>
//         </div>
//         <div className="hero-visual">
//           <div className="developer-group">
//             <div className="developer dev1">
//               <div className="avatar">👩‍💻</div>
//               <div className="message">Just deployed my new app!</div>
//             </div>
//             <div className="developer dev2">
//               <div className="avatar">👨‍💻</div>
//               <div className="message">Can someone review my PR?</div>
//             </div>
//             <div className="developer dev3">
//               <div className="avatar">🧑‍💻</div>
//               <div className="message">Sure, I'll help you with that</div>
//               <div className="follow-up">New framework?</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features">
//         <h3>Connect and Collaborate</h3>
//         <p className="subheading">Everything developers need in one platform</p>
        
//         <div className="feature-grid">
//           <div className="feature-card">
//             <div className="feature-icon">💬</div>
//             <h4>Group Chats</h4>
//             <p>Discuss the latest tech trends with developers worldwide. Join topic-specific channels and expand your knowledge.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">📨</div>
//             <h4>Personal Messages</h4>
//             <p>Get guidance and ask questions directly. Build one-on-one connections with mentors and peers.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">📝</div>
//             <h4>Micro-Blogs</h4>
//             <p>Share your tech knowledge with the community. Write short posts, tutorials, and insights.</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">👥</div>
//             <h4>Project Collaboration</h4>
//             <p>Find teammates for your next project. Build together and create amazing applications.</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="testimonials">
//         <h3>What Developers Say</h3>
//         <div className="testimonial-cards">
//           <div className="testimonial">
//             <div className="quote">"DevConnect helped me land my dream job. The community support is incredible!"</div>
//             <div className="author">
//               <div className="avatar">👩‍💼</div>
//               <div>
//                 <div className="name">Sarah Johnson</div>
//                 <div className="title">Senior Frontend Developer</div>
//               </div>
//             </div>
//           </div>
          
//           <div className="testimonial">
//             <div className="quote">"I've learned more in 3 months on DevConnect than in 2 years of college."</div>
//             <div className="author">
//               <div className="avatar">🧑‍🎓</div>
//               <div>
//                 <div className="name">Michael Chen</div>
//                 <div className="title">Computer Science Student</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="final-cta">
//         <h3>Ready to Connect with Developers Worldwide?</h3>
//         <p> developers already building amazing things together</p>
//         <div className="cta-buttons">
//           <button className="btn primary extra-large">Join DevConnect Now</button>
//           <button className="btn secondary large">See How It Works</button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-logo">
//             <span className="logo-icon">💻</span>
//             <h3>DevConnect</h3>
//             <p>Where developers connect, code, and grow</p>
//           </div>
          
//           <div className="footer-links">
//             <div className="link-group">
//               <h4>Product</h4>
//               <a href="#">Features</a>
//               <a href="#">Pricing</a>
//               <a href="#">Download</a>
//             </div>
            
//             <div className="link-group">
//               <h4>Company</h4>
//               <a href="#">About</a>
//               <a href="#">Careers</a>
//               <a href="#">Contact</a>
//             </div>
            
//             <div className="link-group">
//               <h4>Resources</h4>
//               <a href="#">Blog</a>
//               <a href="#">Documentation</a>
//               <a href="#">Community</a>
//             </div>
//           </div>
//         </div>
        
//         <div className="copyright">
//           <p>© 2025 DevConnect. All rights reserved. Made with ❤️ for developers worldwide.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;
import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom'; // Import Link

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon"></span>
          <h1>DevConnect</h1>
        </div>
        <div className="nav-buttons">
          <Link to="/register" className="btn primary">Join DevConnect</Link>
          <Link to="/login" className="btn secondary">Explore First</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Where Developers <span className="highlight">Connect</span>, <span className="highlight">Code</span>, and <span className="highlight">Grow</span></h2>
          <p>Join the fastest growing developer community. Collaborate, learn, and build amazing things together.</p>
          <div className="cta-buttons">
            <Link to="/register" className="btn primary large">Join DevConnect</Link>
            <Link to="/login" className="btn secondary large">Explore First</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="developer-group">
            <div className="developer dev1">
              <div className="avatar">👩‍💻</div>
              <div className="message">Just deployed my new app!</div>
            </div>
            <div className="developer dev2">
              <div className="avatar">👨‍💻</div>
              <div className="message">Can someone review my PR?</div>
            </div>
            <div className="developer dev3">
              <div className="avatar">🧑‍💻</div>
              <div className="message">Sure, I'll help you with that</div>
              <div className="follow-up">New framework?</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h3>Connect and Collaborate</h3>
        <p className="subheading">Everything developers need in one platform</p>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h4>Group Chats</h4>
            <p>Discuss the latest tech trends with developers worldwide. Join topic-specific channels and expand your knowledge.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📨</div>
            <h4>Personal Messages</h4>
            <p>Get guidance and ask questions directly. Build one-on-one connections with mentors and peers.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h4>Micro-Blogs</h4>
            <p>Share your tech knowledge with the community. Write short posts, tutorials, and insights.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h4>Project Collaboration</h4>
            <p>Find teammates for your next project. Build together and create amazing applications.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3>What Developers Say</h3>
        <div className="testimonial-cards">
          <div className="testimonial">
            <div className="quote">"DevConnect helped me land my dream job. The community support is incredible!"</div>
            <div className="author">
              <div className="avatar">👩‍💼</div>
              <div>
                <div className="name">Sarah Johnson</div>
                <div className="title">Senior Frontend Developer</div>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <div className="quote">"I've learned more in 3 months on DevConnect than in 2 years of college."</div>
            <div className="author">
              <div className="avatar">🧑‍🎓</div>
              <div>
                <div className="name">Michael Chen</div>
                <div className="title">Computer Science Student</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h3>Ready to Connect with Developers Worldwide?</h3>
        <p>Developers already building amazing things together</p>
        <div className="cta-buttons">
          <Link to="/register" className="btn primary extra-large">Join DevConnect Now</Link>
          <Link to="/login" className="btn secondary large">See How It Works</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">💻</span>
            <h3>DevConnect</h3>
            <p>Where developers connect, code, and grow</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Download</a>
            </div>

            <div className="link-group">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>

            <div className="link-group">
              <h4>Resources</h4>
              <a href="#">Blog</a>
              <a href="#">Documentation</a>
              <a href="#">Community</a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>© 2025 DevConnect. All rights reserved. Made with ❤️ for developers worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
