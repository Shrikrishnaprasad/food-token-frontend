import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Label from "@material-tailwind/react/Label";
import ModalPopUp from "./ModalPopUp";
import { useGlobalContext } from "context";

export default function CardItems() {
  const { user } = useGlobalContext();

  return (
    <div className="px-6 mb-12">
      <Card>
        <CardImage
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt="Card Image"
        />

        <CardBody>
          <H6 color="gray">Card Title</H6>
          <Paragraph color="gray">
            Don't be scared of the truth because we need to restart the human...
          </Paragraph>
        </CardBody>

        <CardFooter>
          <div class="space-x-4 flex">
            <Label color="green">
              <span className="text-lg">₹. 25 </span>
            </Label>
            <Label color="orange">
              <span className="text-lg">00:15 </span> -min
            </Label>
            {!user.isChef && <ModalPopUp amount={50000} />}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
