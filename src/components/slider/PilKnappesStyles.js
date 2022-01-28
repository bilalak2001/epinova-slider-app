import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    leftArrow: {
        position: "absolute",
        fontSize: "3rem",
        left: "32px",
        top: "50%",
        zIndex: "10",
        cursor: "pointer",
        userSelect: "none",
        color: "rgba(220, 28, 19, 0.4)",
        "&:hover, &:focus": {
          border: "1px solid rgba(251, 250, 217, 0.8)",
          boxShadow: '0 0 1px 0',
          color: "rgba(251, 250, 217, 0.8)",
          backgroundColor: "rgba(220, 28, 19, 0.4))",
          transition: "all 0.3s ease-out",
          borderRadius: "100%",
        },
        [theme.breakpoints.down('xs')]: {
          left: '0',
          top: '50%'
         },
      },
      rightArrow: {
        position: "absolute",
        fontSize: "3rem",
        right: "32px",
        top: "50%",
        zIndex: "10",
        cursor: "pointer",
        userSelect: "none",
        color: "rgba(220, 28, 19, 0.4)",
        "&:hover, &:focus": {
          border: "1px solid rgba(251, 250, 217, 0.8)",
          boxShadow: '0 0 1px 0',
          color: "rgba(251, 250, 217, 0.8)",
          backgroundColor: "rgba(220, 28, 19, 0.4))",
          transition: "all 0.3s ease-out",
          borderRadius: "100%",
        },
        [theme.breakpoints.down('xs')]: {
          right: '0',
          top: '50%'
        },
      },
  }));