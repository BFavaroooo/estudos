import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';


function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Fetch notas do backend
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get('http://localhost:5000/api/notes');
      setNotes(response.data);
    };
    fetchNotes();
  }, [notes]);

  const addNote = async () => {
    const newNote = { title, content };
    await axios.post('http://localhost:5000/api/notes', newNote);
    setTitle('');
    setContent('');
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
  };

  const editNote = async (id) => {
    const updatedNote = { title, content };
    await axios.put(`http://localhost:5000/api/notes/${id}`, updatedNote);
  };

  return (
    <div>
      <h1>Sistema de Notas Pessoais</h1>
      <div>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={addNote}>Adicionar Nota</button>
      </div>
      <div>
        <h2>Notas</h2>
        {notes.map((note) => (
          <div key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note._id)}>Excluir</button>
            <button onClick={() => editNote(note._id)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
