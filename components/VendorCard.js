import React, {Fragment, useState, useEffect} from "react";
//import Link from 'next/link'
import {vendorNameMap} from "../util/vendorNameMap";

export default function VendorCard({ vendor }) {

  const imgStyle = {
    backgroundImage: vendor.fimg_url ? `url("${vendor.fimg_url}")` //https://cors-anywhere.herokuapp.com/
      : "url(http://tartanweddings.com/wp-content/uploads/2018/11/dundas-events-page.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "top"
  }

  return (
    <li className="vendor clearfix">
      {/* <Link href="/recipes/[id]" as={`/recipes/${recipe.id}`}> */}
          {/* <h1 dangerouslySetInnerHTML={{ __html: vendor.title.rendered}} />
          <img src={vendor.fimg_url} width="300px" /> */}
          <div className="image-container" style={imgStyle}></div>
          <div className="meta">
            <h2 dangerouslySetInnerHTML={{ __html: vendor.title.rendered}} />
            <strong>{vendorNameMap(vendor.vendor_type)}</strong>
            <p><i>{vendor.location}</i></p>
            <p>{vendor.description}</p>
          </div>
          <div className="meta links">
            {vendor.website &&
              <a href={vendor.website} target="_blank" rel="noopener noreferrer">
                <img alt="website logo" src="/images/website.png" height="35" />
              </a>
            }
            {vendor.instagram &&
              <a href={vendor.instagram} target="_blank">
                <img alt="instagram logo" src="/images/instagram.png" height="35" />
              </a>
            }
            {vendor.facebook &&
              <a href={vendor.facebook} target="_blank" rel="noopener noreferrer">
                <img alt="facebook logo" src="/images/facebook.png" height="35" />
              </a>
            }
          </div>
          <div className="like-btn">
            {vendor.liked &&
              <i className="large material-icons">favorite</i>
            }
            {!vendor.liked &&
              <i className="large material-icons">favorite_border</i>
            }
          </div>
      {/* </Link> */}
    </li>
  )
}
