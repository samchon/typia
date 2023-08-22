import typia from "typia";

import { ArraySimpleProtobuf } from "../structures/ArraySimpleProtobuf";

const data: ArraySimpleProtobuf = ArraySimpleProtobuf.generate();
const encoded: Uint8Array = typia.protobuf.encode<ArraySimpleProtobuf>(data);
const decoded: ArraySimpleProtobuf =
    typia.protobuf.decode<ArraySimpleProtobuf>(encoded);
const again: Uint8Array = typia.protobuf.encode<ArraySimpleProtobuf>(decoded);

console.log(
    encoded.length === again.length,
    encoded.every((byte, index) => byte === again[index]),
);
