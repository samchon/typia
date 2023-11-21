import fs from "fs";
import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { DynamicJsonValue } from "../structures/DynamicJsonValue";

const factory = typia.createIs<DynamicJsonValue>();
const validate = (spoiler: Spoiler<DynamicJsonValue>) => {
  const input = DynamicJsonValue.generate();
  const expected = spoiler(input)[0];
  const actual = factory(input);

  if (actual) console.log("failed to detect", expected);
  else console.log("detected", expected);
};

for (const spoiler of DynamicJsonValue.SPOILERS) validate(spoiler);

fs.writeFileSync(
  __dirname + "/nestia-346-is.out.js",
  factory.toString(),
  "utf8",
);
