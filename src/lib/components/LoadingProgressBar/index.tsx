import { Center, Progress } from '@chakra-ui/react';
import { useEffect } from 'react';
import type React from 'react';

interface LoadingProgressBarProps {
  loading: boolean; // Flag indicando se o progresso está em andamento
}

export const LoadingProgressBar: React.FC<LoadingProgressBarProps> = ({
  loading,
}) => {
  // Efeito useEffect executado quando o componente é montado
  useEffect(() => {
    return () => {};
  }, []); // O array de dependências vazio [] significa que o efeito é executado apenas uma vez, equivalente ao componentDidMount

  return (
    // Componente Center do Chakra UI para centralizar os elementos filhos
    <Center mt={4}>
      {/* Verificando se o progresso está em andamento */}
      {loading && (
        <Progress
          size="md"
          isIndeterminate
          width="50%"
          colorScheme="teal"
          borderRadius="md"
        />
      )}
    </Center>
  );
};
