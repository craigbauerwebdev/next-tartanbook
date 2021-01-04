//import Head from 'next/head';
//import Link from "next/link";


const VendorFilters = ({})=> {
    // expected props
    // sortBy (function)
    return (
        <div className="filters">
            <h3>Vendor Filters Component</h3>
            
            {/* <div className="row">
                <div className="col">
                    <select value={vendorType} onChange={(e) => sortBy(e, "vendorType")} className="form-control">
                        <option value="AllVendors">All Vendors</option>
                        {vendorFilters.map((ven) => {
                            //console.log(ven);
                            return <option key={ven} value={ven}>{ven}</option>
                        })}
                    </select>
                </div>
                <div className="col">
                    <select value={location} onChange={(e) => sortBy(e, "location")} className="form-control">
                        <option value="AllLocations">All Locations</option>
                        {locationFilters.map((loc) => {
                            //console.log(loc);
                            return <option key={loc} value={loc}>{loc}</option>
                        })}
                    </select>
                </div>
            </div> */}
        </div>
    );
}

export default VendorFilters;
