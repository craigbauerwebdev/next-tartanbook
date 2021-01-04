export const vendorNameMap = (name) => {
    switch (name) {
        case "Photographers":
            return "Photographer"
            break;
        case "Officiants":
            return "Officiant"
            break;
        case "Makeup":
            return "Makeup Artist"
            break;
        case "Cake":
            return "Cake Designer"
            break;
        case "Florists":
            return "Florist"
        default:
            return name
    }
    //return name + "xx=>";
}