import React, { useState } from "react";
import {
    Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles(()=>({
    faner:{
        color: "rgba(251, 250, 217, 1)",
        fontSize: "20px",
        fontFamily: 'Nunito'
    },
    icon:{
        color: "rgba(251, 250, 217, 0.8)",
        fontSize: '2rem',
    },
    drawer: {
      background: 'rgba(220, 28, 19, 0.2)'
    },
    listeItem: {
      "&:hover, &:active": {
        border: "px solid rgba(251, 250, 217, 0.8)",
        boxShadow: '0 0 1px 0',
        color: "rgba(251, 250, 217, 0.8)",
        backgroundColor: "rgba(220, 28, 19, 0.2)"
      },
    }
}));

const HeaderMobil = () => {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
      classes={ {paper: classes.drawer}}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem className={classes.listeItem} onClick={() => setOpenDrawer(false)}>
            <ListItemText className={classes.listeItem}>
              <Button ><p className={classes.faner}>Tjenester</p></Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button ><p className={classes.faner}>Tilbud</p></Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button ><p className={classes.faner}>Kontakt oss</p></Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Button ><p className={classes.faner}>FAQ</p></Button>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <SortIcon className={classes.icon}/>
      </IconButton>
    </>
  );
}
export default HeaderMobil;