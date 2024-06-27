import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export const TanstackQuery: React.FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) =>
        res.json()
      ),
  });

  if (isPending) return <div>Carregando</div>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>TanStack Query Test</h1>
      <h2>Dados do Pokemon:</h2>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt="" />
      <a href="https://tanstack.com/query/" target="_blank">
        Documentaçao
      </a>
    </div>
  );
};

export const ProviderQuery: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TanstackQuery />
    </QueryClientProvider>
  );
};
