import React from 'react';

function Resume() {
  const proficiencies = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js'];

  return (
    <div>
      <h2>Resume</h2>
      <p>Download my resume <a href="resume.pdf" download>here</a>.</p>
      <h3>Proficiencies</h3>
      <div>
        {proficiencies.map((proficiency, index) => (
          <p key={index}>{proficiency}</p>
        ))}
      </div>
    </div>
  );
}

export default Resume;
