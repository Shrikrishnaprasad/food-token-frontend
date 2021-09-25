import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Button from "@material-tailwind/react/Button";
import DefaultNavbar from "components/DefaultNavbar";
import SimpleFooter from "components/SimpleFooter";
import Page from "components/login/Page";

import Input from "@material-tailwind/react/Input";
import { useState } from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "context";

export default function AddFood() {
  const history = useHistory();
  const { URL } = useGlobalContext();

  const initialState = {
    foodName: "",
    desc: "",
    imgUrl: "",
    price: "",
    minutes: "",
  };
  const [foodDetails, setFoodDetails] = useState(initialState);

  const addFood = (e) => {
    e.preventDefault();

    if (
      foodDetails.foodName &&
      foodDetails.desc &&
      foodDetails.imgUrl &&
      foodDetails.price &&
      foodDetails.minutes
    ) {
      const foodName = foodDetails.foodName;
      const desc = foodDetails.desc;
      const imgUrl = foodDetails.imgUrl;
      const price = foodDetails.price;
      const minutes = foodDetails.minutes;
      let headersList = {
        "Content-Type": "application/json",
      };
      fetch(`${URL}/food/addFood`, {
        method: "POST",
        body: JSON.stringify({
          foodName,
          desc,
          imgUrl,
          price,
          minutes,
        }),
        headers: headersList,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.foodName) {
            alert(data.foodName + " is Added successfully");
            setFoodDetails(initialState);
            history.push("/viewFood");
          } else {
            alert(data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter All fields");
    }
  };

  return (
    <Page>
      <DefaultNavbar />
      <div className="mx-auto max-w-screen-md">
        <Card>
          <CardHeader color="purple" contentPosition="none">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-2xl">Create New Food</h2>
              <Button
                color="transparent"
                buttonType="link"
                size="lg"
                style={{ padding: 0 }}
              >
                Food Details
              </Button>
            </div>
          </CardHeader>
          <form onSubmit={addFood}>
            <CardBody>
              <h6 className="text-purple-500 text-sm mt-3 mb-3  uppercase">
                Food Information
              </h6>
              <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-6/12 pr-4 mb-10 ">
                  <Input
                    type="text"
                    color="purple"
                    placeholder="Food Name"
                    required
                    value={foodDetails.foodName}
                    onChange={(e) =>
                      setFoodDetails({
                        ...foodDetails,
                        foodName: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="w-full lg:w-12/12 mb-10 ">
                  <Input
                    type="text"
                    color="purple"
                    placeholder="Description"
                    maxlength="150"
                    required
                    value={foodDetails.desc}
                    onChange={(e) =>
                      setFoodDetails({
                        ...foodDetails,
                        desc: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full lg:w-12/12 mb-10 ">
                  <Input
                    type="text"
                    color="purple"
                    placeholder="Image Url"
                    required
                    value={foodDetails.imgUrl}
                    onChange={(e) =>
                      setFoodDetails({
                        ...foodDetails,
                        imgUrl: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full lg:w-4/12 pr-4 mb-10 ">
                  <Input
                    type="number"
                    color="purple"
                    placeholder="Price (250)"
                    required
                    value={foodDetails.price}
                    onChange={(e) =>
                      setFoodDetails({
                        ...foodDetails,
                        price: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full lg:w-4/12 px-4 mb-10 ">
                  <Input
                    type="text"
                    color="purple"
                    placeholder="Minutes (00:59)"
                    required
                    value={foodDetails.minutes}
                    onChange={(e) =>
                      setFoodDetails({
                        ...foodDetails,
                        minutes: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  color="lightBlue"
                  buttonType="link"
                  size="lg"
                  ripple="dark"
                >
                  Add Food
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
      <SimpleFooter />
    </Page>
  );
}
