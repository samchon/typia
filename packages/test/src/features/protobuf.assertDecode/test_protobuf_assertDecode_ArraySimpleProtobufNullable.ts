import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createAssertDecode_ArraySimpleProtobufNullable =
  _test_protobuf_assertDecode(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
    decode: (input) =>
      typia.protobuf.assertDecode<ArraySimpleProtobufNullable>(input),
    encode: typia.protobuf.createEncode<ArraySimpleProtobufNullable>(),
  });
