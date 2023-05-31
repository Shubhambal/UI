// Written by [Nikhil, shruti,omkar]
// Date: [25/05/2023]


import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import Corosol from "./CarouselComponent"
import { Card } from 'react-bootstrap';


export default function Home() {
  const [Categories, setCategory] = useState([]);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    // Fetch categories data from the API
    fetch("http://localhost:8080/api/Categories")
      .then((res) => res.json())
      .then((result) => {
        // Update the state with the fetched categories
        setCategory(result);
        console.log(result);
      });
      
    console.log("----------------------");
    console.log(Categories);
  }, []);
  
  const handleClick = (category_Id) => {
    // Navigate to the subcategory page when a category is clicked
    navigate('/subcategory/' + category_Id);
  };
  
  return (
    <div>
      <Corosol/>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
            {/* Map through the Categories array and render each category */}
            {Categories.map((cat, ind) => (
              <a key={cat.id} href={`/subcategory/${cat.category_Id}`}>
                {/* Card component representing a category */}
                <Card style={{ margin: "2%",backgroundColor: "white" }} className="card">
                  <Card.Img variant="top" src={cat.category_Img_Path} style={{ width: '100%', height: '180px' }} />
                  <Card.Body>
                    <Card.Title style={{color:'black'}}>{cat.category_Name}</Card.Title>
                    {/* Additional card text or content */}
                  </Card.Body>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


// const Example = [
//   {
//     id: 1,
//     name: 'Electronics',
//     href: '#',
//     imageSrc: '../images/homeapp.png',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   {
//     id: 1,
//     name: 'Home Appliances',
//     href: '#',
//     imageSrc: '../images/electronics.png',
//     imageAlt: "Home Appliances",
//     price: '$35',
//     color: 'Black',
//   },
//   {
//     id: 1,
//     name: 'Fashion',
//     href: '#',
//     imageSrc: '../images/fashion.png',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   {
//     id: 1,
//     name: 'super market',
//     href: '#',
//     imageSrc: '../images/supermarket.png',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   {
//     id: 1,
//     name: 'Beauty',
//     href: '#',
//     imageSrc: '../images/Beuty.png',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   // More products...
// ]


// export default function Home() {
//   const [Categories, setCategory] = useState([]);
  
//  const navigate=useNavigate();
//   useEffect(() => {
//     fetch("http://localhost:8080/api/Categories")
//       .then((res) => res.json())
//       .then((result) => {
//         setCategory(result);
//         console.log(result)
//       });
//       console.log("----------------------")
//     console.log(Categories);
//   }, []);
//   const handleClick=(category_Id)=>{
//     navigate('/subcategory/'+category_Id)
//   }
//   return (
//     <div>
//       <Corosol/>
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
//            {Categories.map((cat, ind) => (
// //             <div key={val.category_Id
// //             } className="group relative">
// //               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white-200 lg:aspect-none group-hover:opacity-75 lg:h-50">
// //                 <img
// //                   src={val.category_Img_Path
// //                   }
// //                   alt={val.category_Name}
// //                   className="h-fit w-fit object-cover object-center lg:h-fit lg:w-fit"
// //                 />
// //               </div>

// //               <div className="mt-4 flex justify-between">
// //                 <div>
// //                   <h3 className="text-sm text-gray-700">
// //                     <a href={val.categoryId} onClick={() => handleClick(val.category_Id
// // )}>
// //                       <span aria-hidden="true" className="absolute inset-0" />
// //                        {val.category_Name} 
// //                     </a>
// //                   </h3>
// //                   {/* * subcategory={val.parentcategory_Id}
// //                       flag={val.flag}  */}
// //                 </div>
// //               </div>
// //             </div>

//   // <a key={cat.id} href={`/subcategory/${cat.category_Id}`}>
//   //  <div className="m-2 bg-white rounded-lg shadow-lg">
//   //     <img src={cat.category_Img_Path} alt="Category" className="w-full h-50 object-cover" />
//   //     <div className="p-4">
//   //       <h4 className="text-xl font-semibold">{cat.category_Name}</h4>
//   //       {/* Additional card text or content */}
//   //     </div>
//   //   </div>
//   // </a>
//   <a key={cat.id} href={`/subcategory/${cat.category_Id}`}>
//             <Card style={{ margin: "2%",backgroundColor: "white" }} className="card">
//               <Card.Img variant="top" src={cat.category_Img_Path} style={{ width: '100%', height: '180px' }} />
//               <Card.Body>
//                 <Card.Title style={{color:'black'}}>{cat.category_Name}</Card.Title>
//                 {/* Additional card text or content */}
//               </Card.Body>
//             </Card>
//           </a>

// ))}

//           {/* ))} */}
// {/* */}
        
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }
