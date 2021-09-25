import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H5 from "@material-tailwind/react/Heading5";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import DefaultNavbar from "components/DefaultNavbar";
import SimpleFooter from "components/SimpleFooter";
import Page from "components/login/Page";
import Container from "components/login/Container";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "context";

export default function Login() {
  const history = useHistory();
  const { URL, user, setUser } = useGlobalContext();
  const [type, setType] = useState("User");
  const initialState = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialState);
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const checkLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      const email = loginData.email;
      const password = loginData.password;
      const isChef = type === "Chef" ? true : false;
      let headersList = {
        "Content-Type": "application/json",
      };
      fetch(`${URL}/user/login`, {
        method: "POST",
        body: JSON.stringify({ email, password, isChef }),
        headers: headersList,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.username) {
            alert("Hi " + data.username + " !! You are logged in ");
            setLoginData(initialState);
            setUser({
              ...user,
              id: data._id,
              username: data.username,
              email: data.email,
              mobile: data.mobile,
              isChef: data.isChef,
            });
            history.push("/");
            setType("User");
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
      <Container>
        <Card>
          <CardHeader color="purple">
            <H5 color="white" style={{ marginBottom: 0 }}>
              Login
            </H5>
          </CardHeader>
          <form onSubmit={checkLogin}>
            <CardBody>
              <div className="mb-12 px-4 bg-bb">
                <InputIcon
                  type="email"
                  color="lightBlue"
                  placeholder="Email Address"
                  iconName="email"
                  required
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-12 px-4">
                <InputIcon
                  type="password"
                  color="lightBlue"
                  placeholder="Password"
                  iconName="lock"
                  required
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-8 px-4">
                <Box sx={{ minWidth: 140 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={type}
                      label="Type"
                      onChange={handleChange}
                      size="medium"
                    >
                      <MenuItem value="User">User</MenuItem>
                      <MenuItem value="Chef">Chef</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <p className="mt-2 text-gray-400">
                User - sgkrishna619@gmail.com , pass : 123
              </p>
              <p className="mt-2 text-gray-400">
                For Chef - chef@gmail.com , pass : 123
              </p>
            </CardBody>
            <CardFooter>
              <div className="flex justify-center bg-bb">
                <Button
                  color="lightBlue"
                  buttonType="link"
                  size="lg"
                  ripple="dark"
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </CardFooter>
          </form>
        </Card>
      </Container>
      <SimpleFooter />
    </Page>
  );
}
