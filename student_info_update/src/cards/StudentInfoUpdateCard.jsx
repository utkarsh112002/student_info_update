import { withStyles } from "@ellucian/react-design-system/core/styles";
import { spacing40 } from "@ellucian/react-design-system/core/styles/tokens";
import { Typography } from "@ellucian/react-design-system/core";
import { useUserInfo } from "@ellucian/experience-extension-utils";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

const styles = () => ({
  card: {
    marginTop: 0,
    marginRight: spacing40,
    marginBottom: 0,
    marginLeft: spacing40
  }
});

const StudentInfoUpdateCard = (props) => {
  const {
    classes,
    cardInfo,
    data: { authenticatedEthosFetch }
  } = props;

  const {cardId} = cardInfo
  const userInfo = useUserInfo();
  const [personData, setPersonData] = React.useState(null);
  const handlePersonSearch = () => {
    let userId = userInfo.roles.at(-1);
    console.log(userId, "userIdddddd", userInfo)
    authenticatedEthosFetch(`testbyalwin?cardId=${cardId}&personId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
        setPersonData(data.personData); // store only personData
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (userInfo){
      handlePersonSearch();
    }
  }, [userInfo]);

  return (
    <div className={classes.card}>

      {/* SAFELY RENDER DATA */}
      {personData && (
        <div style={{ marginTop: "20px" }}>
          {/* -------- BASIC INFO --------
          <Typography variant="h3">Basic Info</Typography>
          <Typography>Date of Birth: {personData.dateOfBirth || "N/A"}</Typography>
          <Typography>Gender: {personData.gender || "N/A"}</Typography>
          <Typography>
            Citizenship Country: {personData.citizenshipCountry || "N/A"}
          </Typography>
          <Typography>
            Country of Birth: {personData.countryOfBirth || "N/A"}
          </Typography>
          <Typography>
            Marital Status: {personData.maritalStatus?.maritalCategory || "N/A"}
          </Typography>

          <br /> */}

          {/* -------- NAMES -------- */}
          <Typography variant="h3">Names</Typography>
          {personData.names?.map((item, idx) => (
            <div key={idx} style={{ marginTop: "10px" }}>
              <Typography variant="h4">{item.fullName || "No Data Available"}</Typography>
              <Typography>Type: {item.type?.category || "No Data Available"}</Typography>
              <Typography>First Name: {item.firstName || "No Data Available"}</Typography>
              <Typography>Middle Name: {item.middleName || "No Data Available"}</Typography>
              <Typography>Last Name: {item.lastName || "No Data Available"}</Typography>
              <Typography>Preferred: {item.preference || "No Data Available"}</Typography>
            </div>
          ))}

          {/* <br /> */}

          {/* -------- EMAILS -------- */}
          {/* <Typography variant="h3">Emails</Typography>
          {personData.emails?.map((email, index) => (
            <Typography key={index}>{email.address}</Typography>
          ))} */}

          {/* <br /> */}

          {/* -------- PHONES -------- */}
          {/* <Typography variant="h3">Phones</Typography>
          {personData.phones?.map((phone, index) => (
            <Typography key={index}>
              {phone.number} ({phone.phoneType})
            </Typography>
          ))} */}

          <br />

          {/* -------- ADDRESSES -------- */}
          {/* <Typography variant="h3">Addresses</Typography>
          {personData.addresses?.map((addr, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <Typography>{addr.addressLine1}</Typography>
              <Typography>
                {addr.city}, {addr.state} {addr.postalCode}
              </Typography>
            </div>
          ))} */}

        </div>
      )}
    {/* <Button
    color="primary"
    size="default"
    variant="contained"
    onClick = {handelNaviagte}> View Details </Button> */}
    </div>
  );
};

StudentInfoUpdateCard.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  cardInfo: PropTypes.shape({
    cardId: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(StudentInfoUpdateCard);
