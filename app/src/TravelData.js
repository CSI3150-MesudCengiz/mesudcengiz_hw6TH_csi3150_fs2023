// It is assumed that this file will be placed inside the src folder
// Do not forget to first import the full path of all your images that is present in the Assets sub-directory as shown below
// import Place1Image1 from "./Assets/filename.extension" and similarly for the rest.
// You can use the images that I have provided or use your own
// I have provided a lorem ipsum content for description. Just use that. No need to spend time figuring out a description.

import p1i1 from "./Assets/LondonImage1.jpg";
import p1i2 from "./Assets/LondonImage2.jpg";
import p1i3 from "./Assets/LondonImage3.jpg";
import p2i1 from "./Assets/SFImage1.jpg";
import p2i2 from "./Assets/SFImage2.jpg";
import p2i3 from "./Assets/SFImage3.jpg";
import p3i1 from "./Assets/TokyoImage1.jpg";
import p3i2 from "./Assets/TokyoImage2.jpg";
import p3i3 from "./Assets/TokyoImage3.jpg";


const TravelData = [
  {
    id: 1,
    heading: "Tokyo",
    img1: p3i1,
    img2: p3i2,
    img3: p3i3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 2,
    heading: "London",
    img1: p1i1,
    img2: p1i2,
    img3: p1i3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    heading: "San Francisco",
    img1: p2i1,
    img2: p2i2,
    img3: p2i3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default TravelData;
