interface Props {
    onChangeHandler: (e: any) => void;
    inputValue: string;
    customClasses?: string;
    inputType?: string;
}
const Input = ({ onChangeHandler, customClasses, inputValue, inputType }: Props) => {
    return (
        <input
            className={`border rounded-sm border-slate-300 p-2 no-underline ${customClasses}`}
            value={inputValue}
            type={inputType}
            onChange={onChangeHandler}
        />
    );
};

export default Input;
