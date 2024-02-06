import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact.name.length >= 3) { // Validación de nombre con mínimo de caracteres
            localStorage.setItem('contact', JSON.stringify(contact));
            navigate('/'); // Redirecciona a la vista principal
        } else {
            alert('El nombre debe tener al menos 3 caracteres.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={contact.name}
                onChange={handleInputChange}
                placeholder="Nombre"
                required
            />
            <input
                type="email"
                name="email"
                value={contact.email}
                onChange={handleInputChange}
                placeholder="Correo electrónico"
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Contact;
