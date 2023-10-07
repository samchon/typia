import typia from "typia";

import { InstanceUnion } from "../structures/InstanceUnion";

const data = InstanceUnion.generate();
const cloned = typia.misc.clone(data);
const casted = typia.notations.snake(data);
console.log(typia.misc.createClone<[]>().toString());
