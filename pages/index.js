import React, { useState } from 'react';
import axios from 'axios';

const HomePage = props => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('Not yet logged in');

    const login = async () => {
        const res = await axios.post('/api/psu', { username, password });

        setLoginStatus(JSON.stringify(res.data))
    }

    return (
        <div>
            <h2>PSU LOGIN</h2>
            <div>
                <label>PSU Passport : </label>
                <input type='text' onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password : </label>
                <input type='password' onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <button onClick={login}>Login</button>
            </div>
            <div style={{ color: 'blue' }}>
                {loginStatus}
            </div>
        </div>
    )
}

export default HomePage