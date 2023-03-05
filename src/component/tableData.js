import React, { useState } from "react";
import CustomModal from "./CustomModal";

const TableData = ({ data, handleAccept, handleReject, isChecking }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <tr onClick={handleShow}>
        <td>{data.nameIrl}</td>
        <td>{data.ageIrl}</td>
        <td>{data.charName}</td>
        <td>{data.discordId}</td>
      </tr>
      <CustomModal
        handleClose={handleClose}
        show={show}
        bodyData={data}
        title={"Form Detail"}
        handleAccept={handleAccept}
        handleReject={handleReject}
        isChecking={isChecking}
      />
    </>
  );
};

export default TableData;
