import fs from "fs";
import typia from "typia";

import { resolved_equal_to } from "../helpers/resolved_equal_to";
import { SetUnion } from "../structures/SetUnion";

const factory = typia.misc.createClone<SetUnion>();
fs.writeFileSync(__dirname + "/clone.js", factory.toString(), "utf8");

const data: SetUnion = SetUnion.generate();
const cloned: SetUnion = factory(data);

console.log({
    data,
    cloned,
    equals: resolved_equal_to("SetUnion")(data, cloned),
});
typia.assert(cloned);
