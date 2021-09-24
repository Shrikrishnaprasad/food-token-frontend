import CardItems from "components/CardItems";
import DefaultFooter from "components/DefaultFooter";
import DefaultNavbar from "components/DefaultNavbar";
import ModalSearch from "components/ModalSearch";

export default function Foods() {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
        <ModalSearch />
      </div>

      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <CardItems />
            <CardItems />
            <CardItems />
            <CardItems />
            <CardItems />
            <CardItems />
            <CardItems />
            <CardItems />
            <CardItems />
            <CardItems />
            <CardItems />
            <CardItems />
            <CardItems />
            <CardItems />
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
}
