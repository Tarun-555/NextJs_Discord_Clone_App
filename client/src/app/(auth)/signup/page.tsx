'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const navigate = useRouter();

    return (
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='flex flex-col gap-6'>
                <h2 className='font-bold text-xl text-center'>Sign Up</h2>
                <div className='flex flex-col gap-1'>
                    <label>Username</label>
                    <Input
                        onChangeHandler={(e) => console.log(e)}
                        customClasses={'w-60'}
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Email</label>
                    <Input
                        onChangeHandler={(e) => console.log(e)}
                        customClasses={'w-60'}
                    />
                </div>
                <div className='flex flex-col gap-1 mb-2'>
                    <label>Password</label>
                    <Input
                        onChangeHandler={(e) => console.log(e)}
                        customClasses={'w-60'}
                    />
                </div>
                <Button
                    label='Sign Up'
                    handleClickHandler={() => navigate.push('/')}
                />
            </form>
        </div>
    );
};

export default Signup;
