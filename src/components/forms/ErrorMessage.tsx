interface ErrorMessageProps {
    error: string;
    visible: boolean;
}

const ErrorMessage = ({ error, visible }: ErrorMessageProps) => {
    if (!error || !visible) return null;

    return <div className="font-xs text-light-red">{error}</div>;
};
export default ErrorMessage;
