import React from 'react';

export type TButtonVariant = 'primary' | 'secondary' | 'icon';

export interface IButtonProps extends React.ComponentProps<'button'> {
  variant: TButtonVariant;
}

const Button = ({
  children,
  variant,
  className,
  ...props
}: React.PropsWithChildren<IButtonProps>): JSX.Element => {
  const classNames = React.useMemo(() => {
    let value = `text-white ${className}`;
    switch (variant) {
      case 'primary':
        value = `rounded-full px-8 py-4 bg-[#3FA72F] ${value}`;
        break;
      case 'secondary':
        value = `rounded-full px-8 py-4 bg-[#FF8A00] ${value}`;
        break;
      case 'icon':
        value = `flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#D0CCC7]/60 ${value}`;
        break;
    }
    return value;
  }, [variant, className]);
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Button',
  variant: 'primary',
};

export default Button;
