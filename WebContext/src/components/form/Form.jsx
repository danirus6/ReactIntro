import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState'; 

const Form = () => {
    console.log("HOLA")
    const [data, setData] = useState({
        title: '',
    });
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const { addNews } = useContext(GlobalContext); 

    const clearForm = () => {
        setData({
            title: '',
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Sending data… ${data.title}`);
        addNews({ title: data.title  }); 
        clearForm();

        setTimeout(() => {
            navigate('/News');
        }, 3000);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setData({
            ...data,
            [name]: value,
        });

        if (value.length < 3) {
            setMessage('Minimo 3 caracteres crack');
            setBtnDisabled(true);
        } else {
            setMessage('');
            setBtnDisabled(false);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={data.title}
                    onChange={handleInputChange}
                    name="title"
                />
                <button type="submit" disabled={btnDisabled}>
                    Enviar
                </button>
                <p>{message}</p>
            </form>
        </>
    );
};

export default Form;
