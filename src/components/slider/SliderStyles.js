import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    root: {
      position: 'relative',
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
    },
    slideActive: {
        opacity: '1',
    },
    slide: {
      opacity: '0',
      transition: 'opacity ease-in-out 1.2s'
    }
  }));