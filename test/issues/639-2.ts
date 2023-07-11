import fs from "fs";
import typia from "typia";

import { TupleUnion } from "../structures/TupleUnion";

type Tuple = [number, boolean, string?, string?];
console.log(typia.createIs<Tuple>().toString());
console.log(typia.createIs<Required<Tuple>>().toString());
console.log(typia.createIs<[unknown?]>().toString());

const factory = typia.createValidate<typia.Primitive<TupleUnion>>();
fs.writeFileSync(__dirname + "/639-2.out.js", factory.toString(), "utf8");
