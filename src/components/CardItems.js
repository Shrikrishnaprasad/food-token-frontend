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
import Skeleton from "@mui/material/Skeleton";

export default function CardItems({ food }) {
  const { user } = useGlobalContext();
  return (
    <div className="px-4 mb-12">
      <Card>
        <CardImage
          src={
            food.imgUrl || (
              <Skeleton
                sx={{ margin: 4 }}
                variant="rectangular"
                width={250}
                height={250}
              />
            )
          }
          alt="Card Image"
        />

        <CardBody>
          <H6 color="gray">{food.foodName}</H6>
          <Paragraph color="gray">{food.desc}</Paragraph>
        </CardBody>

        <CardFooter>
          <div className="space-x-2 flex">
            <Label color="green">
              <span className="text-lg">₹. {food.price} </span>
            </Label>
            <Label color="orange">
              <span className="text-lg">{food.minutes} </span> -min
            </Label>
            {!user.isChef && (
              <ModalPopUp amount={Number(food.price)} food={food} />
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
