// Reserve.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reserve = () => {
    const [reservation, setReservation] = useState({
        reserverName: '',
        reservationDate: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReservation({ ...reservation, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('reservation', JSON.stringify(reservation));
        console.log(localStorage);
        navigate('/');
    };

    return (
        <div>
            <h2>Formulario de Reserva</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="reserverName">Nombre de quien hace la reserva:</label>
                    <input
                        type="text"
                        id="reserverName"
                        name="reserverName"
                        value={reservation.reserverName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="reservationDate">Día de la reserva:</label>
                    <input
                        type="date"
                        id="reservationDate"
                        name="reservationDate"
                        value={reservation.reservationDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Reservar</button>
                </div>
            </form>
        </div>
    );
};

export default Reserve;
