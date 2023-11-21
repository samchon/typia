import fs from "fs";
import typia from "typia";

import { MapSimpleProtobuf } from "../structures/MapSimpleProtobuf";

fs.writeFileSync(
  `${__dirname}/map.js`,
  typia.createIs<MapSimpleProtobuf>().toString(),
  "utf8",
);
