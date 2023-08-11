import typia from "typia";

import { ArrayHierarchicalPointer } from "../structures/ArrayHierarchicalPointer";

const message: string = typia.protobuf.message<ArrayHierarchicalPointer>();
console.log(message);
