import { PropsWithChildren } from 'react';

type ButtonProps = {
  content?: string;
  className?: string;
  title?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, className, title, type, onClick }) => {
  return (
    <button type={type} title={title} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
