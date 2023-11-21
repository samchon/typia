import ajv from "ajv";
import fast from "fast-json-stringify";
import typia from "typia";

import { ObjectSimple } from "../structures/ObjectSimple";

type ObjectArray = Array<ObjectSimple | null>;
const data: ObjectArray = [
  null,
  ObjectSimple.generate(),
  ObjectSimple.generate(),
  ObjectSimple.generate(),
];
const app = typia.json.application<[ObjectArray], "swagger">();
const stringify = fast({
  ...app.schemas[0]!,
  ...app,
} as any);
console.log(stringify(data));

console.log(
  new ajv().compile(typia.json.application<[ObjectArray], "ajv">())([
    ...data,
    {},
  ]),
  new ajv().compile(typia.json.application<[ObjectArray], "swagger">())([
    ...data,
    {},
  ]),
);
