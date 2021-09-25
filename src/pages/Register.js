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

export default function Register() {
  const history = useHistory();
const { URL } = useGlobalContext();
  const initialState = {
    username: "",
    mobile: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    country: "",
    postal: "",
    isChef: false,
  };
  const [userDetails, setUserDetails] = useState(initialState);
  const register = (e) => {
    e.preventDefault();
    if (
      userDetails.username &&
      userDetails.mobile &&
      userDetails.firstName &&
      userDetails.email &&
      userDetails.password &&
      userDetails.address &&
      userDetails.city &&
      userDetails.postal
    ) {
      const email = userDetails.email;
      const password = userDetails.password;
      const username = userDetails.username;
      const mobile = userDetails.mobile;
      const firstName = userDetails.firstName;
      const address = userDetails.address;
      const city = userDetails.city;
      const postal = userDetails.postal;
      let headersList = {
        "Content-Type": "application/json",
      };
      fetch(`${URL}/user/register`, {
        method: "POST",
        body: JSON.stringify({
          username,
          mobile,
          firstName,
          email,
          password,
          address,
          city,
          postal,
        }),
        headers: headersList,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.email) {
            alert("Registration done successfully!");
            setUserDetails(initialState);
            history.push("/login");
          } else {
            alert(data.keyValue.email + " this Email is already exists!");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter required fields");
    }
  };
  return (
    <Page>
      <DefaultNavbar />
      <div className="mx-auto max-w-screen-md">
        <Card>
          <CardHeader color="purple" contentPosition="none">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-2xl">Register</h2>
              <Button
                color="transparent"
                buttonType="link"
                size="lg"
                style={{ padding: 0 }}
              >
                User Details
              </Button>
            </div>
          </CardHeader>
          <form onSubmit={register}>
            <CardBody>
              <h6 className="text-purple-500 text-sm mt-3 mb-3  uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-6/12 pr-4 mb-10">
                  <Input
                    type="text"
                    color="purple"
                    placeholder="* Username"
                    required
                    value={userDetails.username}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full lg:w-6/12 pl-4 mb-10 ">
                  <Input
                    type="number"
                    color="purple"
                    placeholder="* Phone Number"
                    required
                    value={userDetails.mobile}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        mobile: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full lg:w-6/12 pr-4 mb-10 ">
                  <Input
                    type="text"
                    color="purple"
                    placeholder="* First Name"
                    required
                    value={userDetails.firstName}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full lg:w-6/12 pl-4 mb-10 ">
                  <Input
                    type="text"
                    color="purple"
                    placeholder="Last Name"
                    value={userDetails.lastName}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full lg:w-6/12 pr-4 mb-10 ">
                  <Input
                    type="email"
                    color="purple"
                    placeholder="* Email Address"
                    required
                    value={userDetails.email}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full lg:w-6/12 pl-4 mb-10 ">
                  <Input
                    type="password"
                    color="purple"
                    placeholder="* Password"
                    required
                    value={userDetails.password}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <h6 className="text-purple-500 text-sm my-3  uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-12/12 mb-10 ">
                  <Input
                    type="text"
                    color="purple"
                    placeholder="* Address"
                    required
                    value={userDetails.address}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full lg:w-4/12 pr-4 mb-10 ">
                  <Input
                    type="text"
                    color="purple"
                    placeholder="* City"
                    required
                    value={userDetails.city}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full lg:w-4/12 px-4 mb-10 ">
                  <Input
                    type="text"
                    color="purple"
                    placeholder="Country"
                    value={userDetails.country}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        country: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-full lg:w-4/12 pl-4 mb-10 ">
                  <Input
                    type="number"
                    color="purple"
                    placeholder="* Postal Code"
                    required
                    value={userDetails.postal}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        postal: e.target.value,
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
                  Register
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
