import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createValidateDecode_ObjectSimpleProtobufNullable =
  _test_protobuf_validateDecode(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
    decode: (input) =>
      typia.protobuf.validateDecode<ObjectSimpleProtobufNullable>(input),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
  });
