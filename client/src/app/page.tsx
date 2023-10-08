'use client';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

// import { io } from 'socket.io-client';

// const socket = io('http://localhost:4000');

// console.log('socket', socket);

export default function Home() {
    useEffect(() => {
        if (localStorage.getItem('user') === null) {
            redirect('/signup');
        }
    });
    return <div>Home</div>;
}
