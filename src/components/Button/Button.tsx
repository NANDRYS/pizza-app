import cn from 'classnames'
import styles from './Button.module.css'
import { ButtonProps } from "./Button.props";

function Button({ children,className, ...props }: ButtonProps) {
  return (
    <button {...props} className={ cn(styles['button'], styles['accent'], className)}>
      {children}
    </button>
  );
}

export default Button;
