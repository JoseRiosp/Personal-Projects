import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Material MUI
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SettingsIcon from "@mui/icons-material/Settings";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <HomeIcon />;
    case "settings":
      return <SettingsIcon />;
    case "tasks":
      return <AddTaskIcon />;
    default:
      return <HomeIcon />;
  }
};

const MenuItems = ({ list }) => {
  const navigate = useNavigate();
  return (
    <List>
        {list.map(({ text, path, icon }, index) => {
        <ListItem
            key={index}
            button
            onClick={() => {
            navigate(path);
            }}
        >
            <ListItemIcon>{getIcon(icon)}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>;
        })}
    </List>
  );
};

export default MenuItems;
