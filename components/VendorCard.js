import React, {Fragment} from "react";
import Link from 'next/link'

export default function VendorCard({ recipe }) {
  return (
    <li>
      {/* <Link href="/recipes/[id]" as={`/recipes/${recipe.id}`}> */}
        <Fragment>
          <h1>{recipe.title.rendered}</h1>
          <p>Caaard!!!</p>
        </Fragment>
      {/* </Link> */}
    </li>
  )
}
