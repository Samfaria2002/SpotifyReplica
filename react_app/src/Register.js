import React, {useState} from 'react';
import { auth } from './firebase';

function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async () => {
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                alert('Usuário registrado com sucesso');
            } else {
                const data = await response.json();
                alert(data.error || 'Erro desconhecido');
            }
        } catch (error) {
            console.error('Erro ao registrar o usuário:', error);
            alert('Erro ao registrar o usuário. Verifique o console para detalhes');
        }
    };

    return(
        <div>
            <h2>Registro</h2>
            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleRegistration}>Enviar</button>
        </div>
    );
}

export default Registration;