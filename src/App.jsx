import React from "react";
import StudentCard from "./components/studentCard";
import { activeStudents, alumni } from "./data/students";
import "./index.css";

function getMostCommonSkill(allStudents) {
  const counter = {};
  allStudents.forEach(s => {
    s.skills.forEach(skill => {
      const k = skill.trim();
      counter[k] = (counter[k] || 0) + 1;
    });
  });
  // find max
  let best = null;
  let max = 0;
  Object.entries(counter).forEach(([skill, count]) => {
    if (count > max) {
      best = skill;
      max = count;
    }
  });
  return best || "N/A";
}

export default function App() {
  const all = [...activeStudents, ...alumni];
  const total = all.length;
  const activeCount = activeStudents.length;
  const alumniCount = alumni.length;
  const mostCommonSkill = getMostCommonSkill(all);

  return (
    <div className="app-container">
      <header className="site-header">
        <h1>Student Directory 2025</h1>
        <p className="subtitle">Full Stack Development Batch</p>
      </header>

      <main>
        <section className="stats">
          <h2>Directory Statistics</h2>
          <p>Total students: <strong>{total}</strong></p>
          <p>Active: <strong>{activeCount}</strong> | Alumni: <strong>{alumniCount}</strong></p>
          <p>Most common skill: <strong>{mostCommonSkill}</strong></p>
        </section>

        <section className="student-group">
          <h2>Active Students</h2>
          <div className="grid">
            {activeStudents.map(student => (
              <StudentCard
                key={student.rollNumber}
                {...student}
              />
            ))}
          </div>
        </section>

        <section className="student-group">
          <h2>Alumni</h2>
          <div className="grid">
            {alumni.map(student => (
              <StudentCard key={student.rollNumber} {...student} />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Institute of Web Dev — Full Stack Course</p>
        <p>Contact: directory@example.com</p>
        <p>© 2025 Student Portal</p>
      </footer>
    </div>
  );
}
