import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import InputIcon from "@material-tailwind/react/InputIcon";
import SearchIcon from "@mui/icons-material/Search";

export default function ModalSearch({ search, setSearch }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="float-right -mt-4">
      <Button
        color="purple"
        onClick={(e) => setShowModal(true)}
        size="regular"
        type="button"
        ripple="light"
      >
        {search || "Search..."} <SearchIcon className=" ml-10" />
      </Button>

      <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader
          toggler={() => {
            setShowModal(false);
            setSearch("");
          }}
        >
          Search the Food Name here ...
        </ModalHeader>
        <ModalBody>
          <p className="text-base font-bold  leading-relaxed text-gray-600 flex  max-w-md">
            <InputIcon
              type="text"
              color="white"
              size="lg"
              placeholder="Food name..."
              iconFamily="material-icons"
              iconName="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autofocus
            />
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="red"
            buttonType="link"
            onClick={(e) => {
              setShowModal(false);
              setSearch("");
            }}
            ripple="dark"
          >
            Close
          </Button>

          <Button
            color="blue"
            buttonType="outline"
            onClick={(e) => setShowModal(false)}
            ripple="light"
          >
            Search
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
