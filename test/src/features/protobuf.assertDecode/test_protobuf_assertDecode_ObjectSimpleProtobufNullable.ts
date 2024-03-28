import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_assertDecode_ObjectSimpleProtobufNullable =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
    decode: (input) =>
      typia.protobuf.assertDecode<ObjectSimpleProtobufNullable>(input),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
  });
