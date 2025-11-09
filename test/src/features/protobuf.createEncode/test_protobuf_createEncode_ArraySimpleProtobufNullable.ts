import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createEncode_ArraySimpleProtobufNullable =
  (): void =>
    _test_protobuf_encode(
      "ArraySimpleProtobufNullable",
    )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
      encode: typia.protobuf.createEncode<ArraySimpleProtobufNullable>(),
      decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
      message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
    });
