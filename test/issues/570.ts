import typia from "typia";

import { TagCustom } from "../structures/TagCustom";

console.log(
    typia.random<TagCustom>(TagCustom.RANDOM),
    typia.createRandom<TagCustom>(TagCustom.RANDOM)(),
);
