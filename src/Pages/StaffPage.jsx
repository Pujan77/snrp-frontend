import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Spinner, Tab, Table, Tabs } from "react-bootstrap";
import CustomModal from "../component/CustomModal";

const StaffPage = () => {
  const { user, staffGetAllWhitelist, whitelistResponding } =
    useContext(AuthContext);
  const [allWhitelists, setAllWhitelists] = useState(null);
  const [allNotAcceptedData, setAllNotAcceptedData] = useState(null);
  const [allRejectedData, setAllRejectedData] = useState(null);
  const [allAcceptedData, setAllAcceptedData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const allList = async () => {
    try {
      let res = await staffGetAllWhitelist(1);
      setAllWhitelists(res.data.whitelists);
      return res;
    } catch (error) {
      throw error;
    }
  };
  const notAccepted = async () => {
    try {
      let res = await staffGetAllWhitelist(2);
      setAllNotAcceptedData(res.data.whitelists);
      return res;
    } catch (error) {
      throw error;
    }
  };
  const allRejected = async () => {
    try {
      let res = await staffGetAllWhitelist(3);
      setAllRejectedData(res.data.whitelists);
      return res;
    } catch (error) {
      throw error;
    }
  };
  const allAccepted = async () => {
    try {
      let res = await staffGetAllWhitelist(4);
      setAllAcceptedData(res.data.whitelists);
      return res;
    } catch (error) {
      throw error;
    }
  };
  const reloadAllData = () => {
    setLoading(true);
    let first = allList();
    let second = notAccepted();
    let third = allRejected();
    let fourth = allAccepted();
    const promise = Promise.all([first, second, third, fourth]);
    promise
      .then((data) => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleAccept = async (id) => {
    let res = await whitelistResponding(id, {
      accepted: true,
      rejected: false,
      rejectReason: "",
    });
    if (res) {
      reloadAllData();
    }
  };
  useEffect(() => {
    if (user) {
      reloadAllData();
    }
  }, [user]);
  if (loading) {
    return (
      <div>
        <Spinner animation="grow" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    );
  } else if (
    allWhitelists !== null &&
    allNotAcceptedData !== null &&
    allAcceptedData !== null &&
    allRejectedData !== null
  ) {
    return (
      <div className="container mt-1">
        <Tabs
          variant="tabs"
          defaultActiveKey="notAccepted"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="notAccepted" title="Pending">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>IRL Name</th>
                  <th>Age</th>
                  <th>Character Name</th>
                  <th>Discord Name</th>
                </tr>
              </thead>
              <tbody>
                {allNotAcceptedData.map((data, i) => {
                  return (
                    <>
                      <tr key={i} onClick={handleShow}>
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
                      />
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="accepted" title="Accepted">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>IRL Name</th>
                  <th>Age</th>
                  <th>Character Name</th>
                  <th>Discord Name</th>
                </tr>
              </thead>
              <tbody>
                {allAcceptedData.map((data, i) => {
                  return (
                    <tr>
                      <td>{data.nameIrl}</td>
                      <td>{data.ageIrl}</td>
                      <td>{data.charName}</td>
                      <td>{data.discordId}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="rejected" title="Rejected">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>IRL Name</th>
                  <th>Age</th>
                  <th>Character Name</th>
                  <th>Discord Name</th>
                </tr>
              </thead>
              <tbody>
                {allRejectedData.map((data, i) => {
                  return (
                    <tr>
                      <td>{data.nameIrl}</td>
                      <td>{data.ageIrl}</td>
                      <td>{data.charName}</td>
                      <td>{data.discordId}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="allList" title="All list">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>IRL Name</th>
                  <th>Age</th>
                  <th>Character Name</th>
                  <th>Discord Name</th>
                </tr>
              </thead>
              <tbody>
                {allWhitelists.map((data, i) => {
                  return (
                    <tr>
                      <td>{data.nameIrl}</td>
                      <td>{data.ageIrl}</td>
                      <td>{data.charName}</td>
                      <td>{data.discordId}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </div>
    );
  }
};

export default StaffPage;
