import fs from "fs";
import typia from "typia";

import { primitive_equal_to } from "../helpers/primitive_equal_to";
import { ArrayRepeatedUnionWithTuple } from "../structures/ArrayRepeatedUnionWithTuple";

const factory = typia.createStringify<ArrayRepeatedUnionWithTuple>();

fs.writeFileSync(
    __dirname + "/nestia-346-stringify.out.js",
    factory.toString(),
    "utf8",
);

const data = ArrayRepeatedUnionWithTuple.generate();
const invert = JSON.parse(factory(data));
const tracer = {};

primitive_equal_to(data, invert, tracer);
console.log(tracer);
