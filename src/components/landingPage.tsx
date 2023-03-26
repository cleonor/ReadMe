import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import logo from "./../ReadMeLogo.png";

interface ILandingPageProps {}

export const LandingPage = (props: ILandingPageProps) => {
  return (
    <ImageList>
      <ImageListItem key={1}>
        <img src={logo} alt="readMe logo" />
      </ImageListItem>
    </ImageList>
  );
};
