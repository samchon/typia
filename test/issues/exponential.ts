import fs from "fs";
import typia from "typia";

import { DynamicComposite } from "../structures/DynamicComposite";

const data: DynamicComposite = {
  id: "id",
  name: "name",
  "5.175933557310941e-7": -0.170261004873707,
  prefix_upzzoug: "udwpvy",
  sqqfzv_postfix: "xpwmpwr",
  "value_0.18500123790254852": true,
  "value_-0.4744943749449395": -0.12959620300810482,
  "value_-0.41442283348249553": "wchfdtils",
  "between_tmzivbd_and_-0.45295511336433414": false,
};
const json: string = typia.json.stringify(data);
console.log(json);

fs.writeFileSync(
  `${__dirname}/stringify.js`,
  typia.json.createStringify<DynamicComposite>().toString(),
  "utf8",
);
