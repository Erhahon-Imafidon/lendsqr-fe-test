import './formbutton.scss';

interface FormButtonProps {
    text: string;
    onClick: () => void;
}

const FormButton = ({ text, onClick }: FormButtonProps) => {
    return (
        <button
            type="submit"
            onClick={onClick}
            className="br-sm text-white bg-lime-green formBtn font-md"
        >
            {text}
        </button>
    );
};

export default FormButton;
