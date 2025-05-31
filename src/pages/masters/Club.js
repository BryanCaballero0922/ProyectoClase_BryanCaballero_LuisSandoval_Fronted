import { useState } from "react";

function Club() {
    const [editIndex, setEditIndex] = useState(null);
    const [club, setClub] = useState([]);
    const [form, setForm] = useState({ name: '', phone: '', description: '', age: '' });

    const handleOnChangeInputs = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleOnEdit = (id) => {
        setForm(club[id]);
        setEditIndex(id);
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
        setForm({ name: '', phone: '', description: '', age: '' });
    };

    return (
        <div className="container mt-4">
            <h2>Gestión de Club</h2>
            <form onSubmit={handleOnSubmit} className="mb-4">
                {['Nombre Completo', 'Numero telefonico', 'Descripcion', 'Edad'].map((campo) => (
                    <input
                        key={campo}
                        name={campo}
                        value={form[campo]}
                        onChange={handleOnChangeInputs}
                        placeholder={campo}
                        className="form-control mb-2"
                    />
                ))}
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
                            <td>
                                <button className="btn btn-sm btn-warning me-2" onClick={() => handleOnEdit(index)}>Editar</button>
                                <button className="btn btn-sm btn-danger" onClick={() => handleOnDelete(index)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Club;
