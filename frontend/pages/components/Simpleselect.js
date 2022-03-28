import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SimpleSelect(props) {
  const defaultregion = props.region || "us-east-1";
  const [region, setRegion] = React.useState(defaultregion);

  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  const menuProps = {
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
  };
  return (
    <div>
      <FormControl style={{ margin: "8px", minWidth: "120px" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          onChange={handleChange}
          MenuProps={menuProps}
        >
          <MenuItem value={"us-east-1"}>US East (N. Virginia)</MenuItem>
          <MenuItem value={"us-east-2"}>US East (Ohio)</MenuItem>
          <MenuItem value={"us-west-1"}>US West (N. California)</MenuItem>
          <MenuItem value={"us-west-2"}>US West (Oregon)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

