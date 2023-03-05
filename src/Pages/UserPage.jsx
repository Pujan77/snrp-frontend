import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import WhitelistForm from "../component/WhitelistForm";
import { Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { getTimeRequired } from "../utils";

const UserPage = () => {
  const { user, getWhitelistStatus, postWhitelistForm } =
    useContext(AuthContext);
  const [whitelistFound, setWhitelistFound] = useState(null);
  const [whitelistData, setWhitelistData] = useState(null);
  const [loading, setLoading] = useState(true);

  const whitelistStatusPager = async () => {
    setLoading(true);
    let response = await getWhitelistStatus();
    if (response) {
      if (response.data.found) {
        setWhitelistFound(true);
        setWhitelistData(response.data.data);
        setLoading(false);
      } else {
        setWhitelistFound(false);
        setLoading(false);
      }
    }
  };
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setSubmitting(true);
    setLoading(true);
    let res = postWhitelistForm(values);
    res
      .then((response) => {
        whitelistStatusPager();
        axios
          .post(`${process.env.REACT_APP_DISCORD_WHITELIST}`, {
            content: `Hello <@&1078649873127182386>, There is a new form from ${values.nameIrl}, Discord: ${values.discordId}. Login using your staff account to view the form.`,
            username: "Whitelist Kaka",
            avatar_url:
              "https://i.pinimg.com/originals/b6/97/2d/b6972d320611abaeb4e15c041667c939.jpg",
            attachments: [],
          })
          .then((response) => {
            resetForm();
            setSubmitting(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
            setSubmitting(false);
          });
      })
      .catch((error) => {
        setSubmitting(false);
        setLoading(false);
        console.log(error);
      });
  };
  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_BASE_URL}auth/discord`;
  };
  useEffect(() => {
    if (user) {
      whitelistStatusPager();
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
  }
  if (whitelistFound && whitelistData) {
    if (whitelistData[0]?.rejected) {
      return (
        <div className="white-container">
          <div className="small-container">
            <p className="heading-text">
              <span>WHitelist</span> Rejected
            </p>
            <p className="text">
              <span>Reason:</span> {whitelistData[0]?.rejectReason}
              <br />
              <span>Re-apply in:</span>{" "}
              {getTimeRequired(whitelistData[0]?.createdAt)}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="white-container">
          <div className="small-container">
            <p className="heading-text">
              <span>WHitelist :</span>{" "}
              {whitelistData[0]?.accepted === false ? "Pending" : "Accepted"}
            </p>
            <p className="text">
              {whitelistData[0]?.accepted === false ? (
                <>
                  Please wait while <span>Supreme RP</span> staffs look at your
                  application.
                </>
              ) : (
                <>
                  Congratulations! <span>Supreme RP</span> staffs have accepted
                  your application.
                  <span>The best GTA V RP server</span>
                  is waiting for you!
                </>
              )}
            </p>
          </div>
        </div>
      );
    }
  } else if (
    whitelistFound !== null &&
    whitelistFound === false &&
    whitelistData === null
  ) {
    return (
      <div>
        {user?.discordLinked === true ? (
          <WhitelistForm handleSubmit={handleSubmit} />
        ) : (
          <div>
            <Button variant="primary" onClick={handleLogin}>
              Link Discord Id
            </Button>
          </div>
        )}
      </div>
    );
  } else {
    return <div>Reload page to begin</div>;
  }
};

export default UserPage;
