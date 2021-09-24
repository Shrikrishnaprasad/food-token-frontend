import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/landing/StatusCard";

export default function WorkingSection() {
  return (
    <section className="pb-20 bg-gray-100 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="red" icon="stars" title="What’s In Store">
            Food Token has grand plans to be India’s most loved hyper local
            player, It aims to be the most accessible platform on the network -
            hyperlocal, horizontal and across categories.
          </StatusCard>
          <StatusCard color="lightBlue" icon="autorenew" title="Our Values">
            Consumer come first, Keep it easy with these simple but delicious
            recipes. From make-ahead lunches and midweek meals to fuss-free
            sides and moreish cakes, we've got everything you need.
          </StatusCard>
          <StatusCard color="teal" icon="fingerprint" title="Verified Company">
            We build products & solutions that redefine the food ordering &
            delivery space in India, every single day. The best part? Every bit
            of your work at here will help us change the way India eats!
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="people" size="3xl" />
            </div>
            <H4 color="gray">Who are we?</H4>
            <LeadText color="blueGray">
              Our technology platform connects customers, restaurant partners
              and delivery partners, serving their multiple needs. Customers use
              our platform to search and discover restaurants, read and write
              customer generated reviews and view and upload photos, order food
              delivery, book a table and make payments while dining-out at
              restaurants.
            </LeadText>
            <LeadText color="blueGray">
              On the other hand, we provide restaurant partners with
              industry-specific marketing tools which enable them to engage and
              acquire customers to grow their business while also providing a
              reliable and efficient last mile delivery service. We also operate
              a one-stop procurement solution, Hyperpure, which supplies high
              quality ingredients and kitchen products to restaurant partners.
              We also provide our delivery partners with transparent and
              flexible earning opportunities.
            </LeadText>
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
              <CardImage
                alt="Card Image"
                src="https://images.unsplash.com/photo-1470256699805-a29e1b58598a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              />
              <CardBody>
                <H6 color="gray">About Food Token</H6>
                <Paragraph color="blueGray">
                  Food Token has been the home cooks’ choice for over 30 years.
                  It’s the INDIA’s most popular food media brand with reaching
                  over 50 million users.
                </Paragraph>
                <Paragraph color="blueGray">
                  We brings the transparency and accountability to the food
                  chain, creating a distributed & open marketplace where
                  consumers can transact directly with the farmers & producers
                  of their food.
                </Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
