import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Toolbar.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Dehaze";
import Close from "@mui/icons-material/Close";
import { AppContext } from "../App";
import { useScrollWithShadow } from "../Hooks/useScrollWithShadow";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const ToolBar = ({ OnChangeSearchText }) => {
  const [drawer, setDrawer] = useState(false);
  const [onClickSearch, setOnClickSearch] = useState(false);
  const [OnClickSearchIcon, setOnClickSearchIcon] = useState(false);
  const appcxt = useContext(AppContext);
  const { list, text } = appcxt.state;
  const { boxShadow, onScrollHandler } = useScrollWithShadow();
  const [enableShadow, setEnableShadow] = useState(true);

  return (
    <>
      <header
        className="headerSection"
        style={{ marginBottom: OnClickSearchIcon ? 40 : 0 }}
      >
        <div className="innerHeader">
          <div
            className="headerFrame"
            style={{
              maxWidth: "100%",
              paddingRight: 16,
              marginRight: "auto"
            }}
          >
            <div className="logoSection">
              {/* sideBar section           */}
              <div className="sideBarMenu hideMenuBtn">
                <Button
                  className="menuBtn btn  "
                  onClick={() => setDrawer(true)}
                >
                  <span>
                    <ArrowBackIcon />
                  </span>
                </Button>
                <span className="text">Romantic Comedy</span>
              </div>

              {/* skySore Logo section */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {/* <img className="main-logo" src={skyStoreLogo} alt="" /> */}
              </div>

              <div className="singInSection hideSignIn">
                {/* signInSection */}
                <div
                  style={{
                    marginTop: 6,
                    visibility: onClickSearch ? "hidden" : "visible"
                  }}
                ></div>

                {/* search section */}
                <div
                  className="hide-signIn"
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 5,
                    zIndex: 1000000
                  }}
                >
                  <div style={{}}>
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 2px",
                        display: "flex",
                        alignItems: "center",
                        width: onClickSearch ? 300 : 120,
                        height: 30
                      }}
                    >
                      <InputBase
                        focused
                        sx={{ ml: 1, flex: 1 }}
                        placeholder={
                          onClickSearch
                            ? "Search for title,actors,directors"
                            : "Search"
                        }
                        onClick={() => setOnClickSearch(!onClickSearch)}
                        onBlur={() => setOnClickSearch(false)}
                        onChange={(e) =>
                          appcxt.dispatch({
                            type: "OnChangeTxt",
                            payload: e.target.value
                          })
                        }
                        value={text}
                      />

                      <IconButton sx={{ p: "1px" }} aria-label="search">
                        <SearchIcon />
                      </IconButton>

                      <IconButton
                        color="primary"
                        sx={{ p: "10px" }}
                        aria-label="directions"
                      ></IconButton>
                    </Paper>
                  </div>
                </div>
              </div>
              {/* searchIcon */}
              <div className="searchIcon showSearchIcon">
                <Button
                  className="menuBtn btn  "
                  onClick={() => setOnClickSearchIcon(!OnClickSearchIcon)}
                >
                  {OnClickSearchIcon ? (
                    <span>Cancel</span>
                  ) : (
                    <span className="search-icon">
                      <SearchIcon />
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {OnClickSearchIcon && (
            <div
              className="showSearchIcon"
              style={{
                position: "absolute",
                top: 70,
                width: "100%",
                paddingLeft: 10,
                paddingRight: 10
              }}
            >
              <Paper
                sx={{
                  p: "2px 2px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%"
                }}
              >
                <InputBase
                  focused
                  sx={{ flex: 1 }}
                  placeholder={
                    onClickSearch
                      ? "Search for title,actors,directors"
                      : "Search"
                  }
                  onClick={() => setOnClickSearch(!onClickSearch)}
                  onBlur={() => setOnClickSearch(false)}
                  onChange={(e) =>
                    appcxt.dispatch({
                      type: "OnChangeTxt",
                      payload: e.target.value
                    })
                  }
                  value={text}
                />
                <IconButton sx={{ p: "1px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>

                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                ></IconButton>
              </Paper>
            </div>
          )}
        </div>
      </header>

      {/* {drawer && (
        // <SideMenu open={drawer} RemoveSideBar={(val) => setDrawer(val)} />
      )} */}
    </>
  );
};

export default ToolBar;
