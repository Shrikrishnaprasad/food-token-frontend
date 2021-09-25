import H3 from "@material-tailwind/react/Heading3";
import Paragraph from "@material-tailwind/react/Paragraph";
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea";
import Button from "@material-tailwind/react/Button";
import { useState } from "react";
import { useHistory } from "react-router";
import { useGlobalContext } from "context";

export default function Form() {
  const { URL } = useGlobalContext();

  const history = useHistory();
  const initialState = {
    name: "",
    email: "",
    msg: "",
  };
  const [sendMail, setSendMail] = useState(initialState);
  const send = (e) => {
    e.preventDefault();
    if (sendMail.name && sendMail.email && sendMail.msg) {
      const name = sendMail.name;
      const email = sendMail.email;
      const msg = sendMail.msg;
      let headersList = {
        "Content-Type": "application/json",
      };
      fetch(`${URL}/mail/addMail`, {
        method: "POST",
        body: JSON.stringify({ name, email, msg }),
        headers: headersList,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          alert("Mailed successfully");
          setSendMail(initialState);
          history.push("/");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter All fields");
    }
  };
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-8/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
          <div className="flex-auto p-5 lg:p-10">
            <div className="w-full text-center">
              <H3 color="gray">Want to work with us?</H3>
              <Paragraph color="blueGray">
                Complete this form and we will get back to you in 24 hours.
              </Paragraph>
            </div>
            <form onSubmit={send}>
              <div className="flex gap-8 mt-16 mb-12">
                <Input
                  type="text"
                  placeholder="Full Name"
                  color="lightBlue"
                  required
                  value={sendMail.name}
                  onChange={(e) =>
                    setSendMail({
                      ...sendMail,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  color="lightBlue"
                  required
                  value={sendMail.email}
                  onChange={(e) =>
                    setSendMail({
                      ...sendMail,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <Textarea
                color="lightBlue"
                placeholder="Message"
                required
                value={sendMail.msg}
                onChange={(e) =>
                  setSendMail({
                    ...sendMail,
                    msg: e.target.value,
                  })
                }
              />

              <div className="flex justify-center mt-10">
                <Button color="purple" type="submit" ripple="light">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
