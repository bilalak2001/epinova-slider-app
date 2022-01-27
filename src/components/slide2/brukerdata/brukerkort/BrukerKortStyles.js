import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    margin: "2rem 2rem 2rem 0",
    padding: "1.5rem",
    width: "250px",
    boxShadow: "0 0 7px 4px #FBFAD9",
    transition: 'transform .3s ease',
    cursor: 'pointer',
    background: 'rgba(0,0,0,0.5)',
    maxWidth: '100%',
    borderRadius: '20px',
    border: '2px solid',
    "&:hover": {
        transform: 'scale(1.1)',
    },
  },
  title: {
      fontWeight: '800',
      fontSize: '1.5rem',
      fontFamily: 'Nunito',
      color: '#FBFAD9'
  },
  image: {
      display: 'flex',
      justifyContent: 'flex-end',
  },
  img: {
      position: 'aboslute',
      borderRadius: '50%'
  },
  telefon: {
    fontStyle: 'italic',
    fontSize: '.8rem',
    margin: '0',  
    color: '#FBFAD9'
  }
}));
