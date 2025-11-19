import React from "react";
 // optional extra CSS file or put styles in index.css

export default function StudentCard({
  name,
  rollNumber,
  course,
  email,
  skills = [],
  isActive,
}) {
  return (
    <article className="student-card">
      <header className="student-card__header">
        <h3 className="student-card__name">{name}</h3>
        <span
          className={`status-badge ${isActive ? "status-active" : "status-inactive"}`}
          aria-label={isActive ? "Active Student" : "Alumni"}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </header>

      <div className="student-card__meta">
        <p><strong>Roll:</strong> {rollNumber}</p>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      </div>

      <div className="student-card__skills">
        {skills.length ? (
          skills.map((skill, i) => (
            <span className="skill-tag" key={`${rollNumber}-skill-${i}`}>
              {skill}
            </span>
          ))
        ) : (
          <small>No skills listed</small>
        )}
      </div>
    </article>
  );
}
