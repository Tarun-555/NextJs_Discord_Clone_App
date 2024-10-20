import { MouseEventHandler } from 'react';

interface Props {
    label: string;
    handleClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ label, handleClickHandler }: Props) => {
    return (
        <button
            className='bg-indigo-700 text-white rounded-md py-2 mx-2'
            onClick={handleClickHandler}>
            {label}
        </button>
    );
};

export default Button;
