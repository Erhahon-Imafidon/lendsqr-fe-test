import React from 'react';
import './appInput.scss';

interface AppInputProp extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    isShown?: boolean;
    onClick?: () => void;
}

const AppInput = ({
    isShown,
    onClick,
    className = '',
    ...otherProps
}: AppInputProp) => {
    return (
        <div className={`appInput ${className}`}>
            <input {...otherProps} />

            {isShown && (
                <button type="button" className="btn font-xs" onClick={onClick}>
                    SHOW
                </button>
            )}
        </div>
    );
};

export default AppInput;
