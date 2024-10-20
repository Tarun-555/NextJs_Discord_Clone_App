'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import { Axios } from '@/utils/apiService';

const Login = () => {
    const navigate = useRouter();

    const [loginFormDetails, setLoginFormDetails] = useState({
        email: '',
        password: '',
    });

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (loginFormDetails.email && loginFormDetails.password) {
            console.log('before');
            Axios.post('/login', loginFormDetails).then((res) => {
                // console.log('res after', res);
                if (res.status == 201) {
                    console.log('res after2', res);
                    localStorage.setItem('user', JSON.stringify(res.data.data.userId));
                    navigate.push('/');
                }
            });
        }
    };

    return (
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-6'>
            <form className='flex flex-col gap-6'>
                <h2 className='font-bold text-xl text-center'>Login</h2>
                <div className='flex flex-col gap-1'>
                    <label>Email</label>
                    <Input
                        onChangeHandler={(e) =>
                            setLoginFormDetails({
                                ...loginFormDetails,
                                email: e.target?.value,
                            })
                        }
                        customClasses={'w-60'}
                        inputValue={loginFormDetails.email}
                    />
                </div>
                <div className='flex flex-col gap-1 mb-2'>
                    <label>Password</label>
                    <Input
                        onChangeHandler={(e) =>
                            setLoginFormDetails({
                                ...loginFormDetails,
                                password: e.target?.value,
                            })
                        }
                        customClasses={'w-60'}
                        inputValue={loginFormDetails.password}
                    />
                </div>
                <Button
                    label='Login'
                    handleClickHandler={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                        handleLogin(e)
                    }
                />
            </form>
        </div>
    );
};

export default Login;
