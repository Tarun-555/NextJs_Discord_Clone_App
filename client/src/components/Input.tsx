interface Props {
    onChangeHandler: (e: any) => void;
    customClasses?: string;
}
const Input = ({ onChangeHandler, customClasses }: Props) => {
    return (
        <input
            className={`border rounded-sm border-slate-300 p-2 no-underline ${customClasses}`}
            value={''}
            onChange={onChangeHandler}
        />
    );
};

export default Input;
