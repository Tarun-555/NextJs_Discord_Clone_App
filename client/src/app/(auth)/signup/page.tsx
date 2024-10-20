'use client';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { Axios } from '@/utils/apiService';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';

const Signup = () => {
    const navigate = useRouter();

    useEffect(() => {
        console.log(Axios.defaults);
        // const res = Axios.get('/signup');
    }, []);

    const [signUpFormDetails, setSignupFormDetails] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (signUpFormDetails?.username && signUpFormDetails.email && signUpFormDetails.password) {
            console.log('before');
            Axios.post('/signup', signUpFormDetails).then((res) => {
                console.log('res after', res);
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
                <h2 className='font-bold text-xl text-center'>Sign Up</h2>
                <div className='flex flex-col gap-1'>
                    <label>Username</label>
                    <Input
                        onChangeHandler={(e) =>
                            setSignupFormDetails({
                                ...signUpFormDetails,
                                username: e.target?.value,
                            })
                        }
                        inputValue={signUpFormDetails.username}
                        inputType='text'
                        customClasses={'w-60'}
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Email</label>
                    <Input
                        onChangeHandler={(e) =>
                            setSignupFormDetails({
                                ...signUpFormDetails,
                                email: e.target?.value,
                            })
                        }
                        inputValue={signUpFormDetails.email}
                        inputType='email'
                        customClasses={'w-60'}
                    />
                </div>
                <div className='flex flex-col gap-1 mb-2'>
                    <label>Password</label>
                    <Input
                        onChangeHandler={(e) =>
                            setSignupFormDetails({
                                ...signUpFormDetails,
                                password: e.target?.value,
                            })
                        }
                        inputValue={signUpFormDetails.password}
                        inputType='password'
                        customClasses={'w-60'}
                    />
                </div>
                <Button
                    label='Sign Up'
                    handleClickHandler={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                        handleSignup(e)
                    }
                />
            </form>
            <p className='mt-4 italic font-serif'>
                Already User? Click here to{' '}
                <Link
                    href='/login'
                    className='text-indigo-700 not-italic font-light'>
                    login
                </Link>
            </p>
        </div>
    );
};

export default Signup;
