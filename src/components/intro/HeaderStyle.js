import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Nunito",
      },
      icon: {
        color: "rgba(251, 250, 217, 0.8)",
        fontSize: "2rem",
        borderRadius: "50%",
      },
      appBarTittel: {
        fontFamily: "Nunito",
        fontSize: "2rem",
        flexGrow: "1",
        color: 'rgba(251, 250, 217, 0.9)'
      },
      appBar: {
        background: "none",
        "&:hover, &:focus": {
          border: "2px solid rgba(251, 250, 217, 0.8)",
          boxShadow: '0 0 1px 0',
          color: "rgba(251, 250, 217, 0.8)",
          backgroundColor: "rgba(220, 28, 19, 0.2)",
          transition: "all 0.1s ease-out",
          borderRadius: "3%"
        },
      },
      appBarWrapper: {
        width: "100%",
        margin: "0 auto",
      },
      container: {
        textAlign: "center",
      },
      tittel: {
        color: "rgba(251, 250, 217, 0.9)",
        fontSize: "4.5rem",
        textShadow: "0.5px 0px 3px "
      },
      gaNed: {
        color: "rgba(220, 28, 19, 0.4)",
        transform: 'scale(3.5)',
        "&:hover, &:focus": {
            border: "1px solid rgba(251, 250, 217, 0.8)",
            boxShadow: '0 0 1px 0',
            color: "rgba(251, 250, 217, 0.8)",
            backgroundColor: "rgba(220, 28, 19, 0.2)",
            transition: "all 0.3s ease-out",
            borderRadius: "100%",
          },
      },
      faneTittel: {
        fontFamily: "Nunito",
        color: "rgba(251, 250, 217, 0.9)",
        fontSize: "1rem",
        marginLeft: "5rem"
      },
      buttonWrapper: {
        marginRight: "1%",
      },
}));
