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

export default function CardTableEdit() {
  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl"> Token Status</h2>
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
                  Current Status
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Update
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
                  <div className="flex">
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="row-radio-buttons-group"
                      defaultValue="active"
                    >
                      <Tooltip
                        title="Click Update to Change"
                        arrow
                        placement="top-end"
                        TransitionComponent={Zoom}
                      >
                        <FormControlLabel
                          value="pending"
                          control={<Radio />}
                          label={<Label color="red">Pending</Label>}
                        />
                      </Tooltip>
                      <Tooltip
                        title="Click Update to Change"
                        arrow
                        placement="top-end"
                        TransitionComponent={Zoom}
                      >
                        <FormControlLabel
                          value="completed"
                          control={<Radio />}
                          label={<Label color="green">Completed</Label>}
                        />
                      </Tooltip>
                      <Tooltip
                        title="Click Update to Change"
                        arrow
                        placement="top-end"
                        TransitionComponent={Zoom}
                      >
                        <FormControlLabel
                          value="active"
                          control={<Radio />}
                          label={<Label color="blue">Active</Label>}
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
                  ></LoadingButton>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
