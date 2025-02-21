import React, { useState } from "react";
import "./resume.css";

function Resume() {
  const [isEditing, setIsEditing] = useState(true); // edit and display mode

  // name email phone number
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // education 
  const [educationList, setEducationList] = useState([]);
  const [eduInput, setEducationInput] = useState("");

  // work experience
  const [experienceList, setExperienceList] = useState([]);
  const [workInput, setExperienceInput] = useState("");

  // hides input and shows txt 
  const handleSubmit = () => {
    setIsEditing(false);
  };

  // edit shows input again
  const handleEdit = () => {
    setIsEditing(true);
  };

  // adding education
  const addEducation = () => {
    if (eduInput.trim() !== "") { // wont add if empty 
      setEducationList([...educationList, eduInput]);
      setEducationInput(""); // clears it after its added
    }
  };

  // adding work experience 
  const addWorkExp = () => {
    if (workInput.trim() !== "") { // wont add if empty 
      setExperienceList([...experienceList, workInput]);
      setExperienceInput(""); // clears it after its added
    }
  };

  // deleting education
  const deleteEducation = (index) => {
    const updatedEducationList = educationList.filter((_, idx) => idx !== index);
    setEducationList(updatedEducationList);
  };

  // deleting work experience
  const deleteWorkExp = (index) => {
    const updatedWorkExpList = experienceList.filter((_, idx) => idx !== index);
    setExperienceList(updatedWorkExpList);
  };

  return (
    <div className="resume">
      <h1>Build Your Resume</h1>

      {isEditing ? (
        // editing mode
        <>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label>
            Phone:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>


          {/*education part*/}
          <h2>Education</h2>
          <input
            type="text"
            placeholder="Enter school/degree"
            value={eduInput}
            onChange={(e) => setEducationInput(e.target.value)}
          />
          <button onClick={addEducation}>Add</button>
          <ul>
            {educationList.map((edu, index) => (
              <li key={index}>
                {edu}
                <button className="delete" onClick={() => deleteEducation(index)}>Delete</button>
              </li>
            ))}
          </ul>

            {/* work experience part */}
          <h2>Work Experience</h2>
          <input
            type="text"
            placeholder="Enter job title/company"
            value={workInput}
            onChange={(e) => setExperienceInput(e.target.value)}
          />
          <button onClick={addWorkExp}>Add</button>
          <ul>
             {/* handles deleting  */}
            {experienceList.map((exp, index) => (
              <li key={index}>
                {exp}
                <button className="delete" onClick={() => deleteWorkExp(index)}>Delete</button>
              </li>
            ))}
          </ul>

          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (

        // after data its submitted
        <>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>

          <h2>Education</h2>
          <ul>
            // no education = nothiing added
            {educationList.length > 0 ? (
              educationList.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))
            ) : (
              <p>No education added.</p>
            )}
          </ul>

          <h2>Experience</h2>
          <ul>
            // no work experience = nothing added
            {experienceList.length > 0 ? (
              experienceList.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))
            ) : (
              <p>No experience added.</p>
            )}
          </ul>

          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Resume;