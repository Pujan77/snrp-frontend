import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Spinner, Tab, Table, Tabs } from "react-bootstrap";
import axios from "axios";
import { randomAcceptedImages, randomRejectedImages } from "../utils";
import TableData from "../component/tableData";

const StaffPage = () => {
  const { user, staffGetAllWhitelist, whitelistResponding } =
    useContext(AuthContext);
  const [allWhitelists, setAllWhitelists] = useState(null);
  const [allNotAcceptedData, setAllNotAcceptedData] = useState(null);
  const [allRejectedData, setAllRejectedData] = useState(null);
  const [allAcceptedData, setAllAcceptedData] = useState(null);
  const [loading, setLoading] = useState(true);

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
  const handleAccept = async (id, discId) => {
    let res = await whitelistResponding(id, {
      accepted: true,
      rejected: false,
      rejectReason: "",
    });
    if (res) {
      axios
        .post(`${process.env.REACT_APP_DISCORD_WHITELIST_ACCEPT}`, {
          content: `Congratulations <@${discId}> ! You cleared form. Brace yourself for interview.`,
          embeds: [
            {
              color: 258479,
              author: {
                name: "Yessssssss!!!!",
                icon_url:
                  "https://static.wikia.nocookie.net/gtawiki/images/4/49/LesterCrest-GTAVee.png",
              },
              image: {
                url: `${
                  randomAcceptedImages[Math.floor(Math.random() * 6)].url
                }`,
              },
            },
          ],
          username: "Franklin Dada",
          avatar_url:
            "https://static.wikia.nocookie.net/characterprofile/images/b/bd/78642356-3922-4971-AB31-2049D3BC3A3A.png",
          attachments: [],
        })
        .then((response) => {
          reloadAllData();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleReject = async (id, discId, rejectReason) => {
    let res = await whitelistResponding(id, {
      accepted: false,
      rejected: true,
      rejectReason: rejectReason
        ? rejectReason
        : "Very low effort on the form.",
    });
    if (res) {
      axios
        .post(`${process.env.REACT_APP_DISCORD_WHITELIST_ACCEPT}`, {
          content: `Sorry <@${discId}> ! You did not clear the form. Reason: ${rejectReason} Wait 7 days to re-apply`,
          embeds: [
            {
              color: 15807514,
              author: {
                name: "Oh nooooo!!!!",
                icon_url:
                  "https://static.wikia.nocookie.net/gtawiki/images/4/49/LesterCrest-GTAVee.png",
              },
              image: {
                url: `${
                  randomRejectedImages[Math.floor(Math.random() * 5)].url
                }`,
              },
            },
          ],
          username: "Lester Dada",
          avatar_url:
            "https://i.pinimg.com/originals/b6/97/2d/b6972d320611abaeb4e15c041667c939.jpg",
          attachments: [],
        })
        .then((response) => {
          reloadAllData();
        })
        .catch((error) => {
          console.log(error);
        });
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
                    <TableData
                      key={i}
                      data={data}
                      handleAccept={handleAccept}
                      handleReject={handleReject}
                      isChecking={true}
                    />
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
                    <TableData
                      key={i}
                      data={data}
                      handleAccept={handleAccept}
                      handleReject={handleReject}
                      isChecking={false}
                    />
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
                    <TableData
                      key={i}
                      data={data}
                      handleAccept={handleAccept}
                      handleReject={handleReject}
                      isChecking={false}
                    />
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
                    <TableData
                      key={i}
                      data={data}
                      handleAccept={handleAccept}
                      handleReject={handleReject}
                      isChecking={false}
                    />
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
