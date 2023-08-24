import fs from "fs";
import typia from "typia";
import { MaxItems, MinItems } from "typia/lib/tags";

type RangedArray = Array<number> & MinItems<3> & MaxItems<10>;

fs.writeFileSync(
    __dirname + "/intersection.json",
    JSON.stringify(typia.metadata<[RangedArray]>(), null, 4),
    "utf8",
);

console.log(typia.createIs<RangedArray>().toString());
