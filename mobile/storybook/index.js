import { getStorybookUI, configure } from "@storybook/react-native";
import { NativeModules } from "react-native";
import url from "url";

configure(() => {
  require("./stories");
}, module);

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

const StorybookUI = getStorybookUI({ port: 7007, host: hostname });

export default StorybookUI;
