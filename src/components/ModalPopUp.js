import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Label from "@material-tailwind/react/Label";
import { useEffect } from "react";
import { useGlobalContext } from "context";
import Image from "@material-tailwind/react/Image";

export default function ModalPopUp({ amount, food }) {
  const { URL, user } = useGlobalContext();

  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState("");
  function genToken() {
    let rndResult = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    let charLen = characters.length;
    for (let i = 0; i < 7; i++) {
      rndResult += characters.charAt(Math.floor(Math.random() * charLen));
    }
    return rndResult;
  }
  let headersList = {
    "Content-Type": "application/json",
  };
  const options = {
    key: "rzp_test_YkCd4OxHtBFQbV", // api-key
    amount: amount * 100, //  = INR 1 = 100 (so * 100)
    name: "Food Token",
    description: "This is a payment for Food token",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response) {
      //alert(response.razorpay_payment_id);
      console.log(response);
      alert("Payment successfully done");
      setShowModal(true);
      const tkn = genToken() + response.razorpay_payment_id;
      setToken(tkn);
      fetch(`${URL}/token/addToken`, {
        method: "POST",
        body: JSON.stringify({
          token: tkn,
          userId: user.id,
          paymentId: response.razorpay_payment_id,
          foodName: food.foodName,
          imgUrl: food.imgUrl,
          price: food.price,
          minutes: food.minutes,
        }),
        headers: headersList,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {})
        .catch((err) => console.log(err));
    },
    prefill: {
      name: user.username,
      contact: user.mobile,
      email: user.email,
    },
    notes: {
      address: "",
    },
    theme: {
      color: "blue",
      hide_topbar: false,
    },
  };
  const openPayMent = () => {
    if (user.email) {
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      alert("Kindly Please Login to Continue");
    }
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Button
        color="purple"
        onClick={(e) => openPayMent()}
        size="sm"
        type="button"
        ripple="light"
      >
        Generate token
      </Button>

      <Modal
        size="regular"
        active={showModal}
        toggler={() => setShowModal(false)}
      >
        <ModalHeader toggler={() => setShowModal(false)}>
          Generated Token
        </ModalHeader>
        <ModalBody>
          <Image
            src="https://image.shutterstock.com/image-vector/red-admit-one-tickets-260nw-73439254.jpg"
            rounded={false}
            raised={true}
            alt="Raised Image"
          />
          <br />
          <br />
          <p className="text-base  leading-relaxed text-gray-600 flex">
            Token :{" "}
            <span className="font-bold mx-4 text-lg">
              {" "}
              {token || "Loading..."}{" "}
            </span>{" "}
            Status -<Label color="blue">Active</Label>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="red"
            buttonType="link"
            onClick={(e) => setShowModal(false)}
            ripple="dark"
          >
            Close
          </Button>

          <Button
            color="blue"
            buttonType="outline"
            onClick={(e) => setShowModal(false)}
            ripple="light"
          >
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
