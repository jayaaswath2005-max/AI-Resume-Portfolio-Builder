function generateResume() {
  const input = document.getElementById('input').value.trim();
  const outputDiv = document.getElementById('output');

  if (!input) {
    outputDiv.innerHTML = "<p style='color:red;'>⚠️ Please enter your details first.</p>";
    return;
  }

  outputDiv.innerHTML = "<em>Generating your AI Resume...</em>";

  // Simulate a short "AI thinking" delay
  setTimeout(() => {
    const sampleResume = `
      <h3>✅ Resume successfully created!</h3>
      <h4>Professional Summary</h4>
      <p>Enthusiastic and detail-oriented individual skilled in ${input}. Passionate about innovation, 
      problem-solving, and continuous learning. Seeking opportunities to apply technical expertise and 
      creativity in real-world projects.</p>

      <h4>Key Skills</h4>
      <ul>
        <li>AI & Machine Learning</li>
        <li>Web Development (HTML, CSS, JS)</li>
        <li>Team Collaboration & Leadership</li>
        <li>Analytical Thinking & Adaptability</li>
      </ul>

      <h4>Projects</h4>
      <ul>
        <li><b>AI Resume & Portfolio Builder</b> – Developed a web app that automatically generates tailored 
        resumes and portfolios for students using intelligent prompt-based systems.</li>
        <li><b>Smart Product Pricing Model</b> – Built an ML model to predict optimal product pricing for 
        e-commerce using Python and Scikit-learn.</li>
      </ul>

      <h4>Contact</h4>
      <p>Email: example@email.com<br>
      LinkedIn: linkedin.com/in/example<br>
      GitHub: github.com/example</p>
    `;

    outputDiv.innerHTML = sampleResume;
  }, 1500);
}
