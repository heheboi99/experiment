import React from 'react';

const Resume = () => {
  return (
    <div className="resume-container">
      {/* Header */}
      <header className="text-center">
        <h1 className="name-heading mb-1">SHAURYA JAIN</h1>
        <div className="subtitle">
          <p>LEAD GEN & MARKETING</p>
          <p>ASSISTANT</p>
        </div>
      </header>

      <div className="divider" />

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
        {/* Left Column */}
        <div>
          {/* Contact Section */}
          <section>
            <h2 className="section-heading mb-3">CONTACT</h2>
            <div className="contact-info space-y-1">
              <p>📞 +91 7383596077</p>
              <p>✉️ catto7383@gmail.com</p>
              <p>🏠 235, shivam residence, kosamba</p>
              <p>🌐 www.reallycreatic.com</p>
            </div>
          </section>

          <div className="divider" />

          {/* Education Section */}
          <section>
            <h2 className="section-heading mb-3">EDUCATION</h2>
            <div className="space-y-3">
              <div>
                <p className="date">2023 - 2024</p>
                <p className="contact-info">SUNRISE SCHOOL</p>
                <p className="contact-info">• 10th Grade</p>
              </div>
              <div>
                <p className="date">2024 - 2025</p>
                <p className="contact-info">E.E.D.M SCHOOL</p>
                <p className="contact-info">• 11th COMMERCE</p>
              </div>
            </div>
          </section>

          <div className="divider" />

          {/* Skills Section */}
          <section>
            <h2 className="section-heading mb-3">SKILLS</h2>
            <ul className="bullet-list space-y-1">
              <li>Copywriting | Content Writing</li>
              <li>Market Research</li>
              <li>Documentation</li>
              <li>Offer Creation</li>
              <li>Product Creation | Testing</li>
              <li>Email / SMS Marketing Campaigns</li>
              <li>Project Management</li>
              <li>Public Relations</li>
              <li>Team Management</li>
              <li>Effective Communication</li>
              <li>Critical Thinking</li>
              <li>Digital Marketing | Lead Gen</li>
            </ul>
          </section>

          <div className="divider" />

          {/* Languages Section */}
          <section>
            <h2 className="section-heading mb-3">LANGUAGES</h2>
            <ul className="contact-info space-y-1">
              <li>English: Fluent</li>
              <li>Hindi: Fluent</li>
              <li>Gujarati: Intermediate</li>
            </ul>
          </section>
        </div>

        {/* Right Column */}
        <div>
          {/* Profile Summary */}
          <section>
            <h2 className="section-heading mb-3">PROFILE SUMMARY</h2>
            <p className="contact-info">
              Dynamic marketing professional with proven success in lead generation and client management. Skilled in digital marketing, copywriting, and team leadership. Currently applying my creative problem-solving to AI, developing AI-generated visuals and training custom AI models.
            </p>
          </section>

          <div className="divider" />

          {/* Project Experience */}
          <section>
            <h2 className="section-heading mb-3">PROJECT EXPERIENCE</h2>
            
            {/* Personal Findings */}
            <div className="mb-5">
              <div className="flex justify-between mb-2">
                <h3 className="experience-title">Personal Findings</h3>
                <span className="date">2025 - PRESENT</span>
              </div>
              <p className="contact-info mb-2">Media/Textual Generative AI and Finetuning AI Models</p>
              <ul className="bullet-list space-y-1">
                <li>Made few well made advertisement visuals (catalog and video) just by using AI and Video editing</li>
                <li>Trained some custom AI chatbot on confidential Documents models for my team.</li>
                <li>Realistic AI talking avatars for creating videos on Socials</li>
                <li>Product photoshoot with AI for E-commerce businesses</li>
                <li>Links: <a href="https://docs.google.com/document/d/1CSHEjvYCrjDkCycgh1aoy4392FK5ms8Zgq1axzKapZ8/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="link">AI automations & ideation</a></li>
              </ul>
            </div>

            {/* Rebelup.co */}
            <div className="mb-5">
              <div className="flex justify-between mb-2">
                <h3 className="experience-title">Rebelup.co | Social content Agency</h3>
                <span className="date">2024 - 2025</span>
              </div>
              <p className="contact-info mb-2">Marketing, Team management, CRM and Business proposals</p>
              <ul className="bullet-list space-y-1">
                <li>Conducted market research to identify the best offer and proposed later to individual potential clients.</li>
                <li>Forged multiple video content scripts and directed to make the business proposals in video form</li>
                <li>Acquired 2 clients for video editing and content creation</li>
                <li>Links: <a href="https://docs.google.com/document/d/1GhU1k9itQym4WSdBJ8_0-CCyFjzjIK66DLAkKCOuRVQ/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="link">Business proposal Ideation (Important)</a></li>
                <li className="ml-8"><a href="https://docs.google.com/document/d/1vslWzYwuCqjLvQ7jd4o7DltcNHaZ4wDWhdeI5hb49uc/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="link">A few Business proposal scripts examples</a></li>
              </ul>
            </div>

            {/* DollarPigeon */}
            <div>
              <div className="flex justify-between mb-2">
                <h3 className="experience-title">DollarPigeon | Lead Generation community</h3>
                <span className="date">2022-2024</span>
              </div>
              <p className="contact-info mb-2">Email marketing, Lead generation and product formation/testing</p>
              <ul className="bullet-list space-y-1">
                <li>Developed and executed targeted email marketing campaigns, resulting in approx. 40% increase in lead generation</li>
                <li>Managed all aspects of the lead generation and client acquisition process with my partners.</li>
                <li>Formed a small community and a simple product which made email marketing effective and cheap.</li>
                <li>Links: <a href="https://docs.google.com/document/d/1JE5SqTM9TDHEKjy1-J3p0A2MxU2PJjoA1j0ESzdy4gs/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="link">Campaign Cheat codes i discovered</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume; 