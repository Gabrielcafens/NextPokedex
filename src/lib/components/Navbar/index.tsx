import { Image } from '@chakra-ui/image';
import { Flex, Input, Button } from '@chakra-ui/react';
import type React from 'react';

interface NavbarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onHomeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchTerm,
  onSearchChange,
  onHomeClick,
}) => {
  return (
    <Flex
      position="sticky"
      top={0}
      align="center"
      justify="space-between"
      p={4}
      bg="gray.700"
      color="white"
      boxShadow="md"
      zIndex={0}
    >
      <Button
        onClick={onHomeClick}
        variant="ghost"
        _hover={{ color: 'teal.400' }}
        display="flex"
        alignItems="center"
      >
        <Image
          src="/assets/pokemon-logo.png"
          alt="Pokemon Logo"
          boxSize="150px"
          objectFit="contain"
          marginLeft="-4"
        />
      </Button>
      <Input
        placeholder="Pesquisa Pokémon"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        size="md"
        focusBorderColor="teal.400"
        bg="white"
        color="gray.700"
      />
    </Flex>
  );
};
