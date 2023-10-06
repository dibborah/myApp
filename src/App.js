// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import { Images } from "./component/images";

// function App() {
//   const [images, setImages] = useState([]);

//   const fetchAPI = async () => {
//     const response = await Axios.get(
//       "https://api.unsplash.com/photos/?client_id=uqr-0EE5-49f0cQTQEnmvP7RhmFMqc_Smdtgj0EUxMs"
//     );
//     // console.log(response.data)
//     const data = await response.data;
//     setImages(data);
//   };
  
//   useEffect(()=>{
//     fetchAPI()
//   },[])

//   return (
//     <>
//       <div className="photos">

//         {images.length > 0 && <Images images={images} />}

//       </div>
//     </>
//   );
// }

// export default App;

import React from 'react'
import Navbar from "./component/header/index"

function App() {
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default App;

{/* <Navbar
t= {456}
a = "MBA"
/> */}

