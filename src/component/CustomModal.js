import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AuthContext from "../context/AuthContext";

const CustomModal = ({
  show,
  handleClose,
  bodyData,
  title,
  handleAccept,
  handleReject,
  isChecking,
}) => {
  const [rejectReason, setRejectReason] = useState(
    "Very low effort on the form"
  );
  return (
    <Modal
      className="whitelist_modal"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="body_whitelist_modal">
        <div className="body_wrapper">
          <div className="row text-start">
            <div className="col-3 form_det">
              <strong>Steam:</strong> {bodyData.steamName}
            </div>
            <div className="col-3 form_det">
              <strong>Hex:</strong> {bodyData.steamHex}
            </div>
            <div className="col-3 form_det">
              <strong>Discord:</strong> {bodyData.discordId}
            </div>
            <div className="col-3 form_det">
              <strong>ID:</strong> {bodyData.discordIdentifier}
            </div>
          </div>
          <hr />
          <div className="row text-start">
            <div className="col-3 form_det">
              <strong>Name:</strong> {bodyData.nameIrl}
            </div>
            <div className="col-3 form_det">
              <strong>Age:</strong> {bodyData.ageIrl}
            </div>
            <div className="col-3 form_det">
              <strong>Char Name:</strong> {bodyData.charName}
            </div>
            <div className="col-3 form_det">
              <strong>RP Hours:</strong> {bodyData.steamHours}
            </div>
          </div>
          <hr />
          <div className="row text-start">
            <div className="form_det">
              <strong>Roleplay Clip</strong>: {bodyData.roleplayClip}
            </div>
          </div>
          <hr />
          <div className="row text-start">
            <div className="form_det">
              <strong>Backstory</strong>
            </div>
            <div className="form_det">{bodyData.charBackstory}</div>
          </div>
          <hr />
          <div className="row text-start">
            <div className="form_det">
              <strong>What does roleplay mean to you?</strong>
            </div>
            <div className="form_det">{bodyData.question1}</div>
          </div>
          <hr />
          <div className="row text-start">
            <div className="form_det">
              <strong>
                Explain your best roleplay story experience so far
              </strong>
            </div>
            <div className="form_det">{bodyData.question2}</div>
          </div>
          <hr />
          <div className="row text-start">
            <div className="form_det">
              <strong>Give an example of No Value of Life</strong>
            </div>
            <div className="form_det">{bodyData.question3}</div>
          </div>
          <hr />
          <div className="row text-start">
            <div className="form_det">
              <strong>What is combat logging?</strong>
            </div>
            <div className="form_det">{bodyData.question4}</div>
          </div>
          <hr />
          <div className="row text-start">
            <div className="form_det">
              <strong>What is combat storing?</strong>
            </div>
            <div className="form_det">{bodyData.question5}</div>
          </div>
          <hr />
          <div className="row text-start">
            <div className="form_det">
              <strong>Explain example of in-game meta</strong>
            </div>
            <div className="form_det">{bodyData.question6}</div>
          </div>
          <hr />
          <div className="row text-start">
            <div className="form_det">
              <strong>
                What is the first thing you do upon entering server? Explain
              </strong>
            </div>
            <div className="form_det">{bodyData.question7}</div>
          </div>
          <hr />
        </div>
        <div className="form-group mt-3 mb-1">
          <input
            type="text"
            placeholder="Reason for reject"
            className="form-control"
            onChange={(e) => setRejectReason(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {isChecking ? (
          <>
            <Button
              onClick={() =>
                handleAccept(bodyData._id, bodyData.discordIdentifier)
              }
              variant="primary"
            >
              Accept
            </Button>
            <Button
              onClick={() =>
                handleReject(
                  bodyData._id,
                  bodyData.discordIdentifier,
                  rejectReason
                )
              }
              variant="danger"
            >
              Reject
            </Button>
          </>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
