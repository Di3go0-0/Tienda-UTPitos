import React from "react";
import './login.css' //se importa el css
import { useNavigate } from "react-router-dom";//es para redireccionar
import axios from "axios";//es para poder hacer peticiones
import { useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";//se importa el contexto
import { useContext } from "react";

const URI = 'http://localhost:3001/users/';

const Login = () => {
    const context = useContext(ShopContext);
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate(`/register`);
    };

    const navigateShopAddtoCart = () => {
        navigate(`/shop`);
    };

    const navigateEditInventory = () => {
        navigate(`/editInventory`);
    };

    const [entrada, setEntrada] = useState('');
    const [entradaP, setEntradaP] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get(URI);
                console.log(res.data)
                setUsers(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        getUsers();
    }, []);

    const compare = () => {
        if (Array.isArray(users)) {
            return users.find(e => e.user_name === entrada && e.password === entradaP);
        }
        return false;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (compare()) {
            if (entrada === 'admin') {
                navigateEditInventory();
                context.AdminChanger(true);
            } else {
                navigateShopAddtoCart();
            }
            context.loggedChanger(true);
        } else {
            navigateLogin();
        }
    };

    const navigateLogin = () => {
        navigate(`/login`);
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={entrada}
                    onChange={(e) => setEntrada(e.target.value)}
                    type="text"
                    name="user"
                    id="user"
                    placeholder="user"
                />
                <input
                    value={entradaP}
                    onChange={(e) => setEntradaP(e.target.value)}
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="password"
                />
                <input type="submit" className="btn-login" value="Login" />
            </form>
            <div href="register" className="btn-register" onClick={navigateRegister}>
                register
            </div>
        </div>
    );
};

export default Login;
