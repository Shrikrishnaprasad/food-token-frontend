import CardTableEdit from "components/CardTableEdit";
import DefaultFooter from "components/DefaultFooter";
import DefaultNavbar from "components/DefaultNavbar";

export default function Status() {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto"></div>

      <div className="px-3 md:px-8 h-auto -mt-12">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <CardTableEdit />
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
}
