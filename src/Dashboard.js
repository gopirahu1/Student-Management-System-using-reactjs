import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faEnvelope, faSchool, faChalkboardTeacher, faClipboardList, faClinicMedical, faCogs } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';

function Dashboard() {
  const [stats] = useState({
    regularStudents: 8,
    remedialStudents: 13,
    paidClubs: 0,
  });

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <FontAwesomeIcon icon={faCogs} className="logo-icon" />
          <span>Preset Admin. System</span>
        </div>
        <nav>
          <ul>
            <li><FontAwesomeIcon icon={faUser} /> Student Management</li>
            <li><FontAwesomeIcon icon={faBook} /> Financial Management</li>
            <li><FontAwesomeIcon icon={faClipboardList} /> Quality Control</li>
            <li><FontAwesomeIcon icon={faSchool} /> Report Delivery</li>
            <li><FontAwesomeIcon icon={faChalkboardTeacher} /> Attendance</li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <header className="header">
          <h1>Student Management</h1>
        </header>
        <div className="stats">
          <div className="stat-box red">
            <h2>{stats.regularStudents}</h2>
            <p><FontAwesomeIcon icon={faUser} /> Regular Students</p>
          </div>
          <div className="stat-box purple">
            <h2>{stats.remedialStudents}</h2>
            <p><FontAwesomeIcon icon={faUser} /> Remedial Students</p>
          </div>
          <div className="stat-box green">
            <h2>{stats.paidClubs}</h2>
            <p><FontAwesomeIcon icon={faUser} /> In Paid Clubs</p>
          </div>
        </div>
        <div className="menu">
          <div className="menu-item"><FontAwesomeIcon icon={faChalkboardTeacher} /> Regular Enrollment</div>
          <div className="menu-item"><FontAwesomeIcon icon={faClipboardList} /> Remedial Enrollment</div>
          <div className="menu-item"><FontAwesomeIcon icon={faChalkboardTeacher} /> Club Management</div>
          <div className="menu-item"><FontAwesomeIcon icon={faBook} /> Classroom Management</div>
          <div className="menu-item"><FontAwesomeIcon icon={faEnvelope} /> SMS/EMAIL</div>
          <div className="menu-item"><FontAwesomeIcon icon={faChalkboardTeacher} /> Attendance</div>
          <div className="menu-item"><FontAwesomeIcon icon={faClinicMedical} /> Clinic</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
