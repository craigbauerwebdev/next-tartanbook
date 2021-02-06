//import useSWR from 'swr'
//import RecipeCard from '../components/RecipeCard'
import React, {useState, useEffect} from "react";
//const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {

  console.log("Home PAGE");
  //const [wrapper, setWrapper] = useState("td");
  /* const { data, error } = useSWR('/api/recipes', fetcher);

  console.log(error);
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div> */

  /* useEffect(() => {
    setWrapper("td");
  }, []);

  const returnJSX = () => {
    const headTager = "td";
    //if (head) return <th key="uuidv4">hello</th>;
    
    //return  <wrapper key = "uuidv4" > hello / bye </wrapper>;
    return (
      React.createElement(
        head ? "td" : "th",
        { key: 'yes' },
        {<div className="some-class">some content</div>}
      )
    )
  } */

  return (
    <>
      <h1>Welcome</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry”s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </>
  )
}
