// import { withStyles } from "@ellucian/react-design-system/core/styles";
// import { spacing40 } from "@ellucian/react-design-system/core/styles/tokens";
// import { Typography, TextLink } from "@ellucian/react-design-system/core";
// import {  useUserInfo } from "@ellucian/experience-extension-utils";
// import PropTypes from "prop-types";
// import React, { useEffect, useMemo } from "react";
// // eslint-disable-next-line import/no-unresolved
// import {
//   DataQueryProvider,
//   experienceTokenQuery,
//   useDataQuery,
// } from "@ellucian/experience-extension-extras";

// const styles = () => ({
//   card: {
//     marginTop: 0,
//     marginRight: spacing40,
//     marginBottom: 0,
//     marginLeft: spacing40,
//   },
// });

// const StudentInfoUpdateCard = () => {

//   const userInfo = useUserInfo();
//   useEffect(() => {
//     console.log(userInfo, "userInfo");
//   }, [userInfo]);

//   //   const { authenticatedEthosFetch } = useData();
//   // Could also be:
//   // const { data: { authenticatedEthosFetch } } = props;

//   //   useEffect(() => {
//   //     fetchData();
//   //   }, []);

//   //   const fetchData = () => {
//   //     const args = {
//   //       options: {
//   //         headers: {
//   //           Accept: "application/vnd.hedtech.integration.v12.0.0+json",
//   //         },
//   //       },
//   //       resource: "persons",
//   //     };
//   //     authenticatedEthosFetch(args.resource, args.options)
//   //       .then((response) => response.json())
//   //       .then((data) => {
//   //         console.log(data, "data value");
//   //       });
//   //   };

//   const  {data, dataError, inPreviewMode, isError, isLoading, isRefreshing }  = useDataQuery("persons");

//   useEffect(() => {
//     console.log(data, "data", dataError,"dataError", inPreviewMode,"inPreviewMode", isError,"isError", isLoading,"isLoading", isRefreshing,"isRefreshing", "data from persons");
//   }, [data, dataError, inPreviewMode, isError, isLoading, isRefreshing]);

//   return (
//     <div>
//       <Typography variant="h2">Hello StudentInfoUpdate World</Typography>
//       <Typography>
//         <span>For sample extensions, visit the Ellucian Developer</span>
//         <TextLink
//           href="https://github.com/ellucian-developer/experience-extension-sdk-samples"
//           target="_blank"
//         >
//           GitHub
//         </TextLink>
//       </Typography>
//     </div>
//   );
// };

// const CardWrapper = () => {
//     //     const {
//     //     configuration: {
//     //         serviceUrl
//     //     } = {}
//     //  } = useCardInfo();

//     //  useEffect(()=> {
//     //     console.log(serviceUrl, "serviceUrl")
//     //  }, [serviceUrl])

//   const options = useMemo(
//     () => ({
//       queryFunction: experienceTokenQuery,
//     //   queryParameters: { serviceUrl },
//       resource: "persons",
//     }),
//     []
//   );

//   return (
//     <DataQueryProvider options={options}>
//       <StudentInfoUpdateCard/>
//     </DataQueryProvider>
//   );
// };

// CardWrapper.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
// export default withStyles(styles)(CardWrapper);

// import { withStyles } from "@ellucian/react-design-system/core/styles";
// import { spacing40 } from "@ellucian/react-design-system/core/styles/tokens";
// import { Typography, TextLink } from "@ellucian/react-design-system/core";
// import { useUserInfo } from "@ellucian/experience-extension-utils";
// import PropTypes from "prop-types";
// import React, { useEffect } from "react";

// const styles = () => ({
//   card: {
//     marginTop: 0,
//     marginRight: spacing40,
//     marginBottom: 0,
//     marginLeft: spacing40,
//   },
// });

// const StudentInfoUpdateCard = (props) => {
//   const {
//     classes,
//     cardInfo: { cardId },
//     data: { authenticatedEthosFetch },
//   } = props;

//   const userInfo = useUserInfo();
//   useEffect(() => {
//     console.log(userInfo, "userInfo");
//   }, [userInfo]);

 
//  const handlePersonSearch = () => {
//     authenticatedEthosFetch(
//       `testbyalwin?cardId=${cardId}`
//     )
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data, "data")
//     })
//     .catch((error) => {
//         console.log(error);
//     });
//   };

//   useEffect(()=> {
//     handlePersonSearch()
//   }, [])

//   return (
//     <div className={classes.card}>
//       <Typography variant="h2">Hello StudentInfoUpdate World</Typography>
//       <Typography>
//         <span>For sample extensions, visit the Ellucian Developer</span>
//         <TextLink
//           href="https://github.com/ellucian-developer/experience-extension-sdk-samples"
//           target="_blank"
//         >
//           GitHub
//         </TextLink>
//       </Typography>
//     </div>
//   );
// };

// StudentInfoUpdateCard.propTypes = {
//    data: PropTypes.object.isRequired,
//   classes: PropTypes.object.isRequired,
//   cardInfo: PropTypes.shape({
//     cardId: PropTypes.string.isRequired,
//   }).isRequired,
// };
// export default withStyles(styles)(StudentInfoUpdateCard);

import { withStyles } from "@ellucian/react-design-system/core/styles";
import { spacing40 } from "@ellucian/react-design-system/core/styles/tokens";
import { Button, Typography } from "@ellucian/react-design-system/core";
import { useUserInfo } from "@ellucian/experience-extension-utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
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
    cardInfo: { cardId },
    data: { authenticatedEthosFetch }
  } = props;

  const history = useHistory()
  const userInfo = useUserInfo();
  const [personData, setPersonData] = React.useState(null);

  useEffect(() => {
    console.log(userInfo, "userInfo");
  }, [userInfo]);

  const handlePersonSearch = () => {
    authenticatedEthosFetch(`testbyalwin?cardId=${cardId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
        setPersonData(data.personData); // store only personData
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handelNaviagte = () => {
    history.push("/student-details")
  }

  useEffect(() => {
    handlePersonSearch();
  }, []);

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
              <Typography variant="h4">{item.fullName}</Typography>
              <Typography>Type: {item.type?.category}</Typography>
              <Typography>First Name: {item.firstName}</Typography>
              <Typography>Middle Name: {item.middleName}</Typography>
              <Typography>Last Name: {item.lastName}</Typography>
              <Typography>Preferred: {item.preference}</Typography>
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
    <Button
    color="primary"
    size="default"
    variant="contained"
    onClick = {handelNaviagte}> View Details </Button>
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
