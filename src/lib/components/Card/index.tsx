import { Box, Text, Image, Flex, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface IPokeCard {
  name: string;
  url: string;
}

interface IPokemonDetails {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: { type: { name: string } }[];
  sprites: {
    front_default: string;
  };
}

const typeColors: { [key: string]: string } = {
  water: '#6890f0',
  fire: '#f05030',
  grass: '#78c850',
  electric: '#f8d030',
  psychic: '#f85888',
  ice: '#98d8d8',
  dragon: '#7038f8',
  dark: '#705848',
  normal: '#a8a878',
  fighting: '#903028',
  flying: '#a890f0',
  poison: '#a040a0',
  ground: '#e0c068',
  rock: '#b8a038',
  bug: '#a8b820',
  ghost: '#705898',
  steel: '#b8b8d0',
  unknown: '#68a090',
};

export const PokeCard: React.FC<IPokeCard> = ({ name, url }: IPokeCard) => {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(
    null
  );
  const router = useRouter();
  const toast = useToast();
  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(url);
        setPokemonDetails({
          id: response.data.id,
          name: response.data.name,
          weight: response.data.weight,
          height: response.data.height,
          types: response.data.types,
          sprites: {
            front_default: response.data.sprites.front_default,
          },
        });
      } catch (error) {
        toast({
          title: 'Erro ao buscar detalhes do Pokémon',
          description: 'Ocorreu um erro ao buscar os detalhes deste Pokémon.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };

    fetchPokemonDetails();
  }, [toast, url]);

  const handleCardClick = () => {
    router.push(`/pokemonId/${pokemonDetails?.id}`);
  };

  if (
    !pokemonDetails ||
    !pokemonDetails.types ||
    !pokemonDetails.types.length
  ) {
    return null;
  }

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
      onClick={handleCardClick}
      transition="transform 0.2s ease-in-out"
      _hover={{
        transform: 'scale(1.05)',
      }}
    >
      <Image
        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails.id}.png`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemonDetails.id}.gif`}
        alt={pokemonDetails.name || ''}
        width="110"
        height="110"
        style={{ display: 'block', margin: 'auto', marginTop: '-1px' }}
      />
      <Text
        mt={4}
        fontWeight="semibold"
        fontSize="lg"
        textTransform="capitalize"
      >
        {name}
      </Text>
      <Text>ID: {pokemonDetails.id}</Text>
      <Text>Weight: {pokemonDetails.weight}</Text>
      <Text>Height: {pokemonDetails.height}</Text>
      <Flex mt={2} justifyContent="center">
        {pokemonDetails.types.map((type) => (
          <Box
            key={type.type.name}
            bg={typeColors[type.type.name] || 'gray.700'}
            color="white"
            px={1}
            py={1}
            borderRadius="md"
            mr={1}
            fontSize="sm"
          >
            {type.type.name}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
