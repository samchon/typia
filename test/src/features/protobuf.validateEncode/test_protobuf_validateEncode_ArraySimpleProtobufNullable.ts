import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_validateEncode_ArraySimpleProtobufNullable =
  (): void =>
    _test_protobuf_validateEncode(
      "ArraySimpleProtobufNullable",
    )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
      encode: (input) =>
        typia.protobuf.validateEncode<ArraySimpleProtobufNullable>(input),
      decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
      message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
    });
