import React, { useEffect, useState } from 'react';
import axios from "axios";

import './App.css';

function App() {

  const [ projects, setProjects ] = useState([]);
  const [ newProject, setNewProject ] = useState({ name: "", description: "", completed: false}) 

  const getProjects = () => {
    axios.get("http://localhost:4321/api/projects")
      .then(res => {
        console.log(res);
        setProjects(res.data);})
  }
  useEffect(() => {
    getProjects();
  }, [])

  const handleChange = event => {
    setNewProject({...newProject, [event.target.name]: event.target.value});
    console.log("NEW PROJECT!!!!", newProject);
  }

  const handleSubmit = (e, project) => {
    e.preventDefault();
    axios.post("http://localhost:4321/api/projects", project)
      .then(result => getProjects())
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>List of projects</h1>
      <form onSubmit={(e) => handleSubmit(e, newProject)}>
        <input 
          placeholder="name"
          name="name"
          value={newProject.name}
          onChange={handleChange}
        />
        <input 
          placeholder="description"
          name="description"
          value={newProject.description}
          onChange={handleChange}
        />
        <button>Do the thing!!!</button>
      </form>
      {projects.map(project => {
        return (
          <div key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
