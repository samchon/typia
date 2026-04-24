import { definePlugin } from "@typia/ttsc";
import * as path from "node:path";

export default definePlugin(() => ({
  name: "typia",
  nativeBinary: path.resolve(__dirname, "../../bin/ttsc-typia.js"),
  nativeMode: "typia",
}));
