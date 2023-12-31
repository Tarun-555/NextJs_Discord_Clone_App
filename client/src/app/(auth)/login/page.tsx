'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';

const Login = () => {
    const navigate = useRouter();
    return (
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-6'>
            <form className='flex flex-col gap-6'>
                <h2 className='font-bold text-xl text-center'>Login</h2>
                <div className='flex flex-col gap-1'>
                    <label>Email</label>
                    <Input
                        onChangeHandler={(e) => console.log(e)}
                        customClasses={'w-60'}
                        inputValue=''
                    />
                </div>
                <div className='flex flex-col gap-1 mb-2'>
                    <label>Password</label>
                    <Input
                        onChangeHandler={(e) => console.log(e)}
                        customClasses={'w-60'}
                        inputValue=''
                    />
                </div>
                <Button
                    label='Login'
                    handleClickHandler={() => navigate.push('/')}
                />
            </form>
        </div>
    );
};

export default Login;
