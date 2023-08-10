import { HStack, IconButton, Show, Text, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <HStack>
      <IconButton
        aria-label="Toggle dark mode"
        icon={isDark ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
