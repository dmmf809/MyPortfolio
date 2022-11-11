import Project1 from "../../assets/projects/rental.png";
import Project2 from "../../assets/projects/webflix.png";
import Project3 from "../../assets/projects/amazon-clone.png";
import Project4 from "../../assets/projects/restaurant.png";

export const projects = {
  project1: [
    {
      name: "Amazon Clone",
      img: Project3,
      description:
        "Replicated Amazon.ca website with full e-commerce functionality such as account sign-in and register using Firebase authentication, checkout page, and real payments using Stripe JS.",
      link: "https://clone-83b6b.web.app/",
    },
  ],
  project2: [
    {
      name: "Webflix",
      img: Project2,
      description:
        "This is a React based website that sends an API request to retrieve movies and TV series information and displays the fetched data through a responsive user interface using Material-UI.",
      link: "https://dmmf809.github.io/Webflix/",
    },
  ],
  project3: [
    {
      name: "Dodgy Brakes Car Rental",
      img: Project1,
      description:
        "This website filters clients based on the search parameter and displays their information. It calculates the total rent amount of the vehicle chosen for a specified client.",
      link: "https://dmmf809.github.io/CarRental/",
    },
  ],
  project4: [
    {
      name: "City Delicatessen",
      img: Project4,
      description:
        "Craving for pizza? This website uses HTML, CSS, and JavaScript that makes the user crave for pizza for its eye-catching user interface.",
      link: "https://dmmf809.github.io/CityDelicatessen/",
    },
  ],
};
