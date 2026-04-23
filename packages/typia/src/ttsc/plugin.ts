import * as path from "node:path";

import { definePlugin } from "@typia/ttsc/plugin";

export default definePlugin(() => ({
  name: "typia",
  nativeBinary: path.resolve(__dirname, "../../bin/ttsc-typia.js"),
  nativeMode: "typia",
}));
