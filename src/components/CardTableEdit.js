import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Label from "@material-tailwind/react/Label";
import BasicSelect from "./BasicSelect";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SendIcon from "@mui/icons-material/Send";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import LoadingButton from "@mui/lab/LoadingButton";
import { useGlobalContext } from "context";
import { useEffect, useState } from "react";
import ChartView from "./ChartView";

export default function CardTableEdit() {
  const { URL } = useGlobalContext();
  const [status, setStatus] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [tokens, setTokens] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  let headersList = {
    "Content-Type": "application/json",
  };
  useEffect(() => {
    fetch(`${URL}/token/getAll`, {
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
  }, [isUpdating]);
  const updateStatus = (id) => {
    if (status) {
      fetch(`${URL}/token/updStatus/${id}`, {
        method: "POST",
        body: JSON.stringify({ status }),
        headers: headersList,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          alert("Status Updated as " + data);
          setStatus("");
          setIsUpdating(!isUpdating);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Select the Status to update");
    }
  };
  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl"> Token Status</h2>
      </CardHeader>
      <br />
      <ChartView />
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
                  Current Status
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Update
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
                      <div className="flex">
                        <RadioGroup
                          row
                          aria-label="gender"
                          name="row-radio-buttons-group"
                          defaultValue={token.status}
                        >
                          <Tooltip
                            title="Click Update to Change"
                            arrow
                            placement="top-end"
                            TransitionComponent={Zoom}
                          >
                            <FormControlLabel
                              value="Pending"
                              control={<Radio />}
                              label={<Label color="red">Pending</Label>}
                              onChange={(e) => setStatus(e.target.value)}
                            />
                          </Tooltip>
                          <Tooltip
                            title="Click Update to Change"
                            arrow
                            placement="top-end"
                            TransitionComponent={Zoom}
                          >
                            <FormControlLabel
                              value="Completed"
                              control={<Radio />}
                              label={<Label color="green">Completed</Label>}
                              onChange={(e) => setStatus(e.target.value)}
                            />
                          </Tooltip>
                          <Tooltip
                            title="Click Update to Change"
                            arrow
                            placement="top-end"
                            TransitionComponent={Zoom}
                          >
                            <FormControlLabel
                              value="Active"
                              control={<Radio />}
                              label={<Label color="blue">Active</Label>}
                              onChange={(e) => setStatus(e.target.value)}
                            />
                          </Tooltip>
                        </RadioGroup>
                      </div>
                    </th>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <LoadingButton
                        loading={false}
                        loadingPosition="start"
                        startIcon={<SendIcon color="primary" />}
                        variant="outlined"
                        onClick={() => updateStatus(token._id)}
                      ></LoadingButton>
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
