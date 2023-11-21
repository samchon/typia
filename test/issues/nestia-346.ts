import fs from "fs";
import typia from "typia";

import { ArrayRepeatedUnionWithTuple } from "../structures/ArrayRepeatedUnionWithTuple";

fs.writeFileSync(
  __dirname + "/nestia-346.out.js",
  typia.createValidate<ArrayRepeatedUnionWithTuple>().toString(),
  "utf8",
);
