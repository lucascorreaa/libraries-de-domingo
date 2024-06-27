import { useQuery } from "@tanstack/react-query"

export function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((res) =>
        res.json(),
      ),
  })

  if (isPending) return <div>Carregando</div>

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>Teste da TanStack
      Query </h1>
      <h2>Dados do Pokemon:</h2>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt="" />
    </div>
  )
}