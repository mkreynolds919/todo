import homepageSplash from './assets/images/homepagesplash.jpeg';
import './homepage.css';

const homepageLoad = function() {

    const content = document.querySelector("#content");

    const splashImg = document.createElement("img");
    splashImg.src = homepageSplash;
    splashImg.id = 'homepage-splash';
    content.appendChild(splashImg);

    const newArrivals = document.createElement("div");
    newArrivals.id = "new-arrivals";
    newArrivals.textContent = "New Arrivals";
    content.insertBefore(newArrivals, splashImg);

    const reviews = document.createElement("div");
    reviews.id = "reviews";
    reviews.textContent = "Reviews";
    content.appendChild(reviews);

    const signup = document.createElement("div");
    signup.id = "sign-up";
    signup.textContent = "Sign up for notification, special offers, and rewards points!"
    content.appendChild(signup);

   
}

export default homepageLoad;
