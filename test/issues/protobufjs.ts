import external from "protobufjs";
import typia from "typia";

import { ArrayHierarchicalPointer } from "../structures/ArrayHierarchicalPointer";

const result: external.IParserResult = external.parse(
    typia.protobuf.message<ArrayHierarchicalPointer>(),
);
const schema = result.root.lookupType("ArrayHierarchicalPointer");

console.log(schema.decode.toString());

// const message = schema.create(ArrayHierarchicalPointer.generate());
// const buffer = schema.encode(message).finish();
// const decoded = schema.decode(buffer).toJSON();

// console.log(decoded);
// console.log(schema.encode.toString());
