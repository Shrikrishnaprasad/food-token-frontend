import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import { useGlobalContext } from "context";

export default function DefaultNavbar() {
  const { user, setUser, userInitialState } = useGlobalContext();
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>
            <Link to="/">
              <Button
                color=""
                className="text-white ml-4 text-lg"
                ripple="light"
              >
                FOOD TOKEN
              </Button>
            </Link>
          </NavbarBrand>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              {user.isChef ? (
                <div className="text-white">
                  <Dropdown
                    color="transparent"
                    size="sm"
                    buttonType="link"
                    buttonText={
                      <div className="py-2.5 font-medium flex items-center">
                        <Icon name="view_carousel" size="2xl" color="white" />
                        <span className="ml-2 text-base">Chef</span>
                      </div>
                    }
                    ripple="light"
                  >
                    <Link to="/viewFood">
                      <DropdownItem color="purple">View Foods</DropdownItem>
                    </Link>
                    <Link to="/status">
                      <DropdownItem color="purple">Update Status</DropdownItem>
                    </Link>
                    <Link to="/addFood">
                      <DropdownItem color="purple">Add Food</DropdownItem>
                    </Link>
                  </Dropdown>
                </div>
              ) : (
                <div className="text-white">
                  <Dropdown
                    color="transparent"
                    size="sm"
                    buttonType="link"
                    buttonText={
                      <div className="py-2.5 font-medium flex items-center">
                        <Icon name="view_carousel" size="2xl" color="white" />
                        <span className="ml-2 text-base">Token</span>
                      </div>
                    }
                    ripple="light"
                  >
                    <Link to="/createToken">
                      <DropdownItem color="lightBlue">Book</DropdownItem>
                    </Link>
                    <Link to="/trackToken">
                      <DropdownItem color="lightBlue">Track</DropdownItem>
                    </Link>

                    <Link to="/register">
                      <DropdownItem color="lightBlue">Register</DropdownItem>
                    </Link>
                  </Dropdown>
                </div>
              )}

              {user.username && (
                <Link to="/">
                  <Button
                    color="transparent"
                    className="bg-gray-50 text-black ml-4"
                    ripple="dark"
                  >
                    Hi! {user.username}
                  </Button>
                </Link>
              )}

              <Link
                to="/login"
                onClick={() => user.email && setUser(userInitialState)}
              >
                <Button
                  color="transparent"
                  className="bg-white text-black ml-4 mt-4 md:mt-0"
                  ripple="dark"
                >
                  {user.email ? "Logout" : "Login"}
                </Button>
              </Link>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
