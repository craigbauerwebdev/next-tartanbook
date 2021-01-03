import useSWR from 'swr'
import RecipeCard from '../components/RecipeCard'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Recipes() {
  const { data, error } = useSWR('/api/recipes', fetcher);

  console.log(data);

  console.log(error);
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((r, i) => {
        return <RecipeCard key={i} recipe={r} />
        //return <h1>{p.title.rendered}</h1>
      })}
    </ul>
  )
}
