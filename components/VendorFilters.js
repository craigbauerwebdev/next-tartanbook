//import Head from 'next/head';
//import Link from "next/link";


const VendorFilters = ({sortBy, type, location, vendorFilters, locationFilters})=> {
    return (
        <div className="filters">            
            <div className="row">
                <div className="col">
                    <select value={type} onChange={(e) => sortBy(e, "vendorType")} className="form-control">
                        <option value="AllVendors">All Vendors</option>
                        {vendorFilters.map((vendor) => {
                            return <option key={vendor} value={vendor}>{vendor}</option>
                        })}
                    </select>
                </div>
                <div className="col">
                    <select value={location} onChange={(e) => sortBy(e, "location")} className="form-control">
                        <option value="AllLocations">All Locations</option>
                        {locationFilters.map((location) => {
                            return <option key={location} value={location}>{location}</option>
                        })}
                    </select>
                </div>
            </div>
            {/* <div className="row">
                <input type="text" />
            </div> */}
        </div>
    );
}

export default VendorFilters;
