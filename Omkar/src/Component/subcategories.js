/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
// const products = [
//     {
//       name: 'Desk and Office',
//       description: 'Work from home accessories',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
//       imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
//       href: '#',
//     },
//     {
//       name: 'Self-Improvement',
//       description: 'Journals and note-taking',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
//       imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
//       href: '#',
//     },
//     {
//       name: 'Travel',
//       description: 'Daily commute essentials',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
//       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//       href: '#',
//     },

import { useEffect, useState } from "react"
import { useParams , useNavigate } from "react-router-dom";

export default function Subcategory() {
    const { code } = useParams();
    const [Category, setCategory] = useState([]);
    const navigate=useNavigate();
    console.log(code + "------------------------------------------")
    useEffect(() => {
        fetch("http://localhost:8081/api/subcategories/" + code).then(res => res.json())
            .then(result => {
                setCategory(result);

            }
            );
        console.log(Category);
    }, []);
    const handlesubcategory = (category_Id)=> {
        navigate("/productsbycat/"+category_Id)
    }
    return (
        <div className="bg-gray-100 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-1 py-20">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
                <div className="mx-auto max-w-2xl py-10 sm:py-20 lg:max-w-none lg:py-8">
                    <div className=" flex flex-wrap justify-start -mx-2 items-start ">
                        {Category.map((product) => (
                            <div key={product.category_Id} className="group relative px-4">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={product.category_Img_Path}
                                        alt={product.category_Img_Path}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500" onClick={()=>handlesubcategory(product.category_Id) }>
                                    <a href={product.href}>
                                        <span className="absolute inset-0" />
                                        {product.category_Name}
                                        
                                    </a>
                                </h3>
                                {/* <p className="text-base font-semibold text-gray-900">{product.description}</p> */}
                            </div>
                        ))}
                    </div>


                </div>

            </div>
        </div>
    )
}
