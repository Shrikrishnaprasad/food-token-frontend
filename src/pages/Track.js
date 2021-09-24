import CardTable from "components/CardTable";
import DefaultFooter from "components/DefaultFooter";
import DefaultNavbar from "components/DefaultNavbar";
import { useGlobalContext } from "context";
import H2 from "@material-tailwind/react/Heading2";
export default function Track() {
  const { user } = useGlobalContext();

  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto"></div>

      <div className="px-3 md:px-8 h-auto -mt-12">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            {user.email ? (
              <CardTable />
            ) : (
              <div className="text-center">
                <br />
                <br />
                <br />
                <H2> Kindly Please Login to Continue</H2>
              </div>
            )}
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
}
