import CardItems from "components/CardItems";
import DefaultFooter from "components/DefaultFooter";
import DefaultNavbar from "components/DefaultNavbar";
import ModalSearch from "components/ModalSearch";
import { useGlobalContext } from "context";
import { useEffect, useState } from "react";
import SkeletonLoading from "components/SkeletonLoading";

export default function Foods() {
  const { URL } = useGlobalContext();
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  let headersList = {
    "Content-Type": "application/json",
  };
  useEffect(() => {
    fetch(`${URL}/food/getAll`, {
      method: "GET",
      headers: headersList,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setFoods(data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  //console.log(foods);
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
        <ModalSearch search={search} setSearch={setSearch} />
      </div>

      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            {foods
              .filter((data) =>
                data.foodName.toLowerCase().includes(search.toLowerCase())
              )
              .map((food, index) => (
                <CardItems key={index} food={food} />
              ))}
            {foods.length === 0 && <SkeletonLoading />}
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
}
