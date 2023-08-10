import typia from "typia";

import { ObjectHierarchical } from "../structures/ObjectHierarchical";

const message: string = typia.protobuf.message<ObjectHierarchical>();
console.log(message);
