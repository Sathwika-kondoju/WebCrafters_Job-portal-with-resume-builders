import React, { useState } from 'react';

function JobTracker() {
  const [applications, setApplications] = useState([]);
  const [job, setJob] = useState({ title: '', status: '' });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const addApplication = () => {
    setApplications([...applications, job]);
    setJob({ title: '', status: '' });
  };

  return (
    <div>
      <h2>Job Application Tracker</h2>
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={job.title}
        onChange={handleChange}
      />
      <select name="status" value={job.status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="Applied">Applied</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
        <option value="Offer Received">Offer Received</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button onClick={addApplication}>Add Application</button>

      <h3>Your Applications</h3>
      <ul>
        {applications.map((app, index) => (
          <li key={index}>
            {app.title} - {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobTracker;