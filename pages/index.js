//import useSWR from 'swr'
//import RecipeCard from '../components/RecipeCard'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  /* const { data, error } = useSWR('/api/recipes', fetcher);

  console.log(error);
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div> */

  return (
    <h1>Welcome</h1>
  )
}
