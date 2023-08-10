import { HStack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack paddingTop="25px" paddingX="40px" gap={8}>
      <Link to="/">
        <Heading as="h1" size="md" fontWeight="extrabold" letterSpacing={5}>
          RAWG
        </Heading>
      </Link>
      <HStack paddingX="40px" gap={2} width="full">
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
