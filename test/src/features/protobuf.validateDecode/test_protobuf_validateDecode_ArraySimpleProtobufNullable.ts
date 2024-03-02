import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_validateDecode_ArraySimpleProtobufNullable =
  _test_protobuf_validateDecode(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
    decode: (input) =>
      typia.protobuf.validateDecode<ArraySimpleProtobufNullable>(input),
    encode: typia.protobuf.createEncode<ArraySimpleProtobufNullable>(),
  });
