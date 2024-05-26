import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    children: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, isActive = false, onClick, className }) => {
    return (
        <button
            type="button"
            className={classNames(
                'text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium rounded-md focus:outline-none',
                {
                    'text-gray-700 border border-gray-800 hover:text-blue-800 hover:border-blue-800 focus:ring-blue-300': !isActive,
                    'text-blue-800 border border-blue-700': isActive,
                },
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
