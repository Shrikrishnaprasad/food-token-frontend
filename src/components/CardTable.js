import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Label from "@material-tailwind/react/Label";
import BasicSelect from "./BasicSelect";
import { useEffect, useState } from "react";
import { useGlobalContext } from "context";

export default function CardTable() {
  const { URL, user } = useGlobalContext();
  const [filterStatus, setFilterStatus] = useState("");
  const [tokens, setTokens] = useState([]);
  let headersList = {
    "Content-Type": "application/json",
  };
  useEffect(() => {
    fetch(`${URL}/token/getByUserId/${user.id}`, {
      method: "GET",
      headers: headersList,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setTokens(data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">Track the token</h2>
      </CardHeader>
      <br />
      <BasicSelect
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
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
              {tokens.length === 0 && (
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    Loading...
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    Loading...
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    00:00 min
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <Label color="gray">Loading...</Label>
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <div className="flex">
                      <div className="w-14 h-14">Loading...</div>
                    </div>
                  </th>
                </tr>
              )}

              {tokens
                .filter((data) =>
                  filterStatus ? data.status === filterStatus : data
                )
                .map((token, index) => (
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {token.token}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {token.foodName}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {token.minutes} min
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {token.status === "Active" && (
                        <Label color="blue">{token.status}</Label>
                      )}
                      {token.status === "Completed" && (
                        <Label color="green">{token.status}</Label>
                      )}
                      {token.status === "Pending" && (
                        <Label color="red">{token.status}</Label>
                      )}
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <div className="flex">
                        <div className="w-14 h-14">
                          <Image src={token.imgUrl} alt="..." />
                        </div>
                      </div>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
