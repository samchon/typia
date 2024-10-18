import typia from "typia";

import { ObjectPartial } from "../structures/ObjectPartial";

const input: ObjectPartial = typia.random<ObjectPartial>();
const encoded = typia.protobuf.encode<ObjectPartial>(input);
console.log(input, encoded);

const decoded = typia.protobuf.decode<ObjectPartial>(encoded);
console.log(decoded);
