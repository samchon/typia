import typia from "typia";

import { TypeTagObjectUnion } from "../structures/TypeTagObjectUnion";

const collection = typia.json.schemas<[TypeTagObjectUnion], "3.0">();
console.log(
  //JSON.stringify(collection, null, 2)
  collection.components.schemas?.TypeTagObjectUnion,
);
