import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BlockButton from "./BlockButton";
import MarkButton from "./MarkButton";
import {
  InsertTableButton,
  DeleteTableButton,
  InsertColumnButton,
  DeleteColumnButton,
  InsertRowButton,
  DeleteRowButton,
} from "../withTables/Components";
import LinkButton from "../withLinks/components/LinkButton";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "-webkit-sticky",
    position: "sticky",
    top: 0,
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    background: "#d1d1cb",
  },
}));

const Toolbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.buttonGroup}>
        <MarkButton format="bold">
          <FormatBoldIcon />
        </MarkButton>
        <MarkButton format="italic">
          <FormatItalicIcon />
        </MarkButton>
        <MarkButton format="underline">
          <FormatUnderlinedIcon />
        </MarkButton>
        <BlockButton format="heading-one">
          <LooksOneIcon />
        </BlockButton>
        <BlockButton format="heading-two">
          <LooksTwoIcon />
        </BlockButton>
        <BlockButton format="block-quote">
          <FormatQuoteIcon />
        </BlockButton>
        <BlockButton format="numbered-list">
          <FormatListNumberedIcon />
        </BlockButton>
        <BlockButton format="bulleted-list">
          <FormatListBulletedIcon />
        </BlockButton>
        <LinkButton />
        <InsertTableButton />
        <DeleteTableButton />
        <InsertRowButton />
        <InsertColumnButton />
        <DeleteRowButton />
        <DeleteColumnButton />
      </div>
    </div>
  );
};

export default Toolbar;
