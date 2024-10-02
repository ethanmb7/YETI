// src/components/Register.js
import React, { useState } from 'react';
import authService from '../services/authService';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');

    const handleRegister = async () => {
        try {
            await authService.register(username, email, password, bio);
            alert('Inscription réussie !');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div
