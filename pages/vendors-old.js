import useSWR from 'swr';
//import withPrivateRoute from '../components/withPrivateRoute';
//import {useAuth} from "../Auth/Auth"
import { useAuth } from "../components/Auth/Auth"; //don't really need it here//
import RecipeCard from '../components/VendorCard';

const fetcher = (url) => fetch(url).then((res) => res.json())

const VendorsOld = () => {
  const { user } = useAuth();
  console.log(user);
  const { data, error } = useSWR('/api/vendors', fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <h1>Test VAR: {process.env.NEXT_PUBLIC_FIREBASE_KEY}</h1>
      {user ? user.uid : "No user logged in"}
      <ul>
        {data.map((r, i) => {
          return <RecipeCard key={i} recipe={r} />
          //return <h1>{p.title.rendered}</h1>
        })}
      </ul>
    </>
  )
}

//export default withPrivateRoute (Vendors);
export default VendorsOld;
