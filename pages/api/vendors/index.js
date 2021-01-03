import axios from "axios";

export default function handler(req, res) {
    /* 
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json') 
    res.end(JSON.stringify({ name: 'John Doe' }))
    */
    axios.get(process.env.VENDORS_ENDPOINT)
        .then((response) => {
            console.log("from vendors api");
            //res.end(JSON.stringify({ name: 'John Doe' }));
            res.send(JSON.stringify(response.data));
            
            //res.end(JSON.stringify(response.data));
            /* res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify([{ name: 'Test Data' }, { name: 'more data'}])) */
        })
        .catch((error) => {
            console.log(error);
        });
}