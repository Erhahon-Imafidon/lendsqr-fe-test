import './appInput.scss';

interface AppInputProp extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    isShown?: boolean;
}

const AppInput = ({ isShown, className = '', ...otherProps }: AppInputProp) => {
    return (
        <div className={`appInput ${className}`}>
            <input {...otherProps} />

            {isShown && <button className="btn">SHOW</button>}
        </div>
    );
};

export default AppInput;
