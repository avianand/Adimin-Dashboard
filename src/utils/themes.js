import { createMuiTheme } from "@material-ui/core";
import { orange, red } from "@material-ui/core/colors";

const themes = createMuiTheme({
  status: {
    warning: orange[500],
    danger: red[500],
  },
});

export default themes;
