import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createAssertDecode_ObjectSimpleProtobufNullable =
  _test_protobuf_assertDecode(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
    decode: typia.protobuf.createAssertDecode<ObjectSimpleProtobufNullable>(),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
  });
