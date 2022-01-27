import React, { useEffect, useState } from "react";
import BrukerKort from "./brukerkort/BrukerKort";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4rem',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}));

const BrukerData = () => {
  const [users, setUsers] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        console.log(response);
        userData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setUsers(userData);
    })();
  }, []);

  console.log(users);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {users.map((user, index) => (
          <BrukerKort userData={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BrukerData;
