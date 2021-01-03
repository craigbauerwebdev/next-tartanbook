import { useRouter } from 'next/router';

const getBannerData = (text, height, img) => {

	const router = useRouter();
	console.log(router.pathname);

	//set banner type. If banner === false {show title}

	let bd = {banner: true};
    switch (router.pathname) {
      case "/":
        bd.img = "/images/slides/whole-foods-cauliflower-bros.jpg";
        bd.text = "Let's Get Supercharged on Plants";
        //bd.banner = true
        break;
      case "/recipes":
        bd.img = "/images/slides/whole2-foods-cauliflower-bros.jpg";
        bd.text = "Vegan Recipes"
        break;
      default:
      	bd.banner = false;
        break;
    }
  
  return bd;
}

/*getDefaultProps() {
    return {
      text: "Hello",
      height: "Button Text"
    };
  }*/

export default getBannerData;