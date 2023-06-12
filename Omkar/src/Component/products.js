
import { useEffect, useState } from "react"
import { useParams , useNavigate } from "react-router-dom";

export default function Productsbycat() {
  const { code } = useParams();
  const [Products, setProducts] = useState([]);
  const navigate=useNavigate();
  console.log(code + "------------------------------------------")
  useEffect(() => {
      fetch("http://localhost:8081/api/productsByCat/" + code).then(res => res.json())
          .then(result => {
              setProducts(result);

          }
          );
      console.log(Products);
  }, []);
  const handlesubcategory = (category_Id)=> {
      navigate("/productsbycat/"+category_Id)
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Products.map((product) => (
            <a key={product.p_Id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.p_Image}
                  alt={product.p_Name                 }
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.p_Name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Rs.<span style={{color:'Blue'}}>{product.p_Price}</span></p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
