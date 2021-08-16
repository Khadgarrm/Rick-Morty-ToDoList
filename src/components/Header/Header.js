import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Container, Toolbar, AppBar, IconButton, Box, Button,  } from "@material-ui/core";
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ToDoForm from '../WatchList/ToDoForm';


function Header() {
  

  return (
        <AppBar position="fixed">
        <Container fixed>
          <Toolbar >
            
          <Button>
                <Link style={{color: '#EEA47FFF'}} path="/" >Characters</Link>
            </Button>
            <Button>
                <a style={{color: '#EEA47FFF'}} href= "">Episodes</a>
            </Button >
            <Button>
                <a style={{color: '#EEA47FFF'}} href= "">Locations</a>
            </Button>
            <Button>
              <Link style={{color: '#EEA47FFF'}} to="/My Watch List">
                My Watch List
              </Link>
            </Button>
             <Box mr={2} flexGrow={1}>
                 <input className="header__searchInput" type="text" />
             </Box>
            <IconButton edge="start" color="white" aria-label="search" >
                <SearchIcon className="header__searchIcon" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default Header;
