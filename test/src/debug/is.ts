import typia from "typia";

import { TypeTagFormat } from "../structures/TypeTagFormat";

console.log(typia.validate<TypeTagFormat>(TypeTagFormat.generate()));
for (let i: number = 0; i < 1_000; ++i)
  for (const spoiler of TypeTagFormat.SPOILERS) {
    const data = TypeTagFormat.generate();
    spoiler(data);
    if (typia.is<TypeTagFormat>(data) === true) console.log(spoiler.toString());
  }
