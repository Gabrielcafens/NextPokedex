import { Box, Image, Text } from '@chakra-ui/react';
import type React from 'react';

interface NoResultsCardProps {
  message?: string;
}

export const NoResultsCard: React.FC<NoResultsCardProps> = ({ message }) => {
  return (
    <Box
      borderWidth="3px"
      borderRadius="lg"
      overflow="hidden"
      p={2}
      textAlign="center"
      bg="gray.600"
      color="white"
      boxShadow="md"
      minWidth={200}
      maxWidth={200}
    >
      <Image
        src="/assets/notfound.jpeg"
        alt="Sem pokemons encontrados"
        width="110"
        height="110"
        style={{ display: 'block', margin: 'auto', marginTop: '-1px' }}
      />
      <Text mt={4} fontWeight="semibold" fontSize="lg">
        {message || 'Nenhum pokemon encontrado'}
      </Text>
    </Box>
  );
};
