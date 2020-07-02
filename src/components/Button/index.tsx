import React from 'react';

import { Button as ButtonPaper } from 'react-native-paper';

interface IProps {
  onPress?: (() => void) | undefined;
  icon?: string;
  mode?: 'text' | 'outlined' | 'contained' | undefined;
}

const Button: React.FC<IProps> = ({ children, onPress, icon, mode }) => {
  return (
    <ButtonPaper accessibilityStates onPress={onPress} mode={mode} icon={icon}>
      {children}
    </ButtonPaper>
  );
};

export default Button;
