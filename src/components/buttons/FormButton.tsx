import './formbutton.scss';

interface FormButtonProps {
    text: string;
}

const FormButton = ({ text }: FormButtonProps) => {
    return (
        <button
            type="submit"
            className="br-sm text-white bg-lime-green formBtn font-md"
        >
            {text}
        </button>
    );
};

export default FormButton;
