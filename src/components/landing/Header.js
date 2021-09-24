import H2 from "@material-tailwind/react/Heading2";
import H3 from "@material-tailwind/react/Heading3";
import LeadText from "@material-tailwind/react/LeadText";

export default function Header() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
      <div className="container max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <H2 color="blue">FOOD TOKEN GENERATOR</H2>
            <H3 color="white">LIFE'S A MYSTERY YOUR FOOD SHOULDN'T BE.</H3>
            <div className="">
              <LeadText color="white">
                FoodToken brings the transparency and accountability to the food
                chain, creating a distributed & open marketplace where consumers
                can transact directly with the farmers & producers of their
                food.
              </LeadText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
