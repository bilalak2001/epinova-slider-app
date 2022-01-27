import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    container: {
        border: '1px solid #fff',
        padding: '25px 12px 18px',
        borderRadius: '20px',
        background:"rgba(0,0,0,0.5)",
    },
    playerWrapper: {
        position: 'relative',
        border: '2px solid #FBFAD9',
        borderRadius: '5px',
        width: 'auto',
        height: 'auto'
    },
    title: {
        color: '#FBFAD9',
        fontWeight: '300',
        fontFamily: 'Nunito',
        "@media (max-width: 500px)": {
            fontSize: '1rem'
        }
    },
    date: {
        color: '#FBFAD9',
        fontWeight: '300',
        fontFamily: 'Nunito',
        margin: '6px 0',
        "@media (max-width: 500px)": {
            fontSize: '1rem'
        }
    }
  }));