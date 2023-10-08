interface Props {
    label: string;
    handleClickHandler: () => void;
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
