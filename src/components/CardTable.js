import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Label from "@material-tailwind/react/Label";
import BasicSelect from "./BasicSelect";

export default function CardTable() {
  const Team1 =
    "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80";

  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">Track the token</h2>
      </CardHeader>
      <br />
      <BasicSelect />
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Token
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Food
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Time
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Status
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  jlhvwuhlfeuhlwhl
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Argon Design System
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  00:15 min
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Label color="green">Completed</Label>
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="flex">
                    <div className="w-14 h-14">
                      <Image src={Team1} alt="..." />
                    </div>
                  </div>
                </th>
              </tr>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  jlhvwuhlfeuhlwhl
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Argon Design System
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  00:15 min
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Label color="red">Pending</Label>
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="flex">
                    <div className="w-14 h-14">
                      <Image src={Team1} alt="..." />
                    </div>
                  </div>
                </th>
              </tr>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  jlhvwuhlfeuhlwhl
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Argon Design System
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  00:15 min
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Label color="blue">Active</Label>
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="flex">
                    <div className="w-14 h-14">
                      <Image src={Team1} alt="..." />
                    </div>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
