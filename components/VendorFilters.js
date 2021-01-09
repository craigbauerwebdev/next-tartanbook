//import Head from 'next/head';
//import Link from "next/link";


const VendorFilters = ({sortBy, type, location, vendorFilters, locationFilters, placeholderText})=> {
    return (
        <div className="filters"> 
            <div className="drop-downs">
                <div className="row">
                    <div className="col">
                        <select value={type} onChange={(e) => sortBy(e, "vendorType")} className="form-control">
                            <option value="AllVendors">All Vendors</option>
                            {vendorFilters.map((vendor) => {
                                return (
                                    <option 
                                        key={vendor} 
                                        value={vendor}>
                                            {vendor}
                                    </option>)
                            })}
                        </select>
                    </div>
                    <div className="col">
                        <select value={location} 
                            onChange={(e) => sortBy(e, "location")}
                            className="form-control">
                            <option 
                                value="AllLocations">
                                    All Locations
                            </option>
                            {locationFilters.map((location) => {
                                return (
                                    <option 
                                        key={location} 
                                        value={location}>
                                            {location}
                                    </option>)
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className="active-pink-4 mb-4">
                <input 
                    class="form-control"
                    type="text"
                    placeholder="Search by Type or Location"
                    onChange={(e) => sortBy(e, "search")}
                    aria-label="Search" />
            </div>
        </div>
    );
}

export default VendorFilters;