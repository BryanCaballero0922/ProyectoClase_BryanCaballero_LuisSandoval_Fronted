import { useState } from "react";

function Club() {
  const [editIndex, setEditIndex] = useState(null);
  const [club, setClub] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', description: '', age: '', workshop: '' });

  const handleOnChangeInputs = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnEdit = (id) => {
    setForm(club[id]);
    setEditIndex(id);
  };

  const handleOnFact = (index) => {
    alert("Cliente Registrado");
    const updatedClub = club.filter((_, i) => i !== index);
    setClub(updatedClub);
  };

  const handleOnDelete = (id) => {
    const updatedClub = club.filter((_, index) => index !== id);
    setClub(updatedClub);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedClub = [...club];
      updatedClub[editIndex] = form;
      setClub(updatedClub);
      setEditIndex(null);
    } else {
      setClub([...club, form]);
    }
    setForm({ name: '', phone: '', description: '', age: '', workshop: ''});
  };

  return (
    <div className="container mt-4">
      <h2>Gestión de Club</h2>
      <form onSubmit={handleOnSubmit} className="mb-4">
        <input
          name="name"
          value={form.name}
          onChange={handleOnChangeInputs}
          placeholder="Nombre Completo"
          className="form-control mb-2"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleOnChangeInputs}
          placeholder="Número Telefónico"
          className="form-control mb-2"
        />
        <input
          name="description"
          value={form.description}
          onChange={handleOnChangeInputs}
          placeholder="Descripción"
          className="form-control mb-2"
        />
        <input
          name="age"
          value={form.age}
          onChange={handleOnChangeInputs}
          placeholder="Edad"
          className="form-control mb-2"
        />
        <input
          name="workshop"
          value={form.workshop}
          onChange={handleOnChangeInputs}
          placeholder="Taller"
          className="form-control mb-2"
        />
        <button className="btn btn-primary">
          {editIndex !== null ? 'Actualizar' : 'Agregar'}
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Número Telefónico</th>
            <th>Descripción</th>
            <th>Edad</th>
            <th>Taller</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {club.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.description}</td>
              <td>{item.age}</td>
              <td>{item.workshop}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleOnEdit(index)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleOnDelete(index)}>Eliminar</button>
                <button className="btn btn-primary btn-sm me-2" onClick={() => handleOnFact(index)}>Registrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Club;

