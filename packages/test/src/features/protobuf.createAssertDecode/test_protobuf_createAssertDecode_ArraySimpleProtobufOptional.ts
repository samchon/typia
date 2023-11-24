import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createAssertDecode_ArraySimpleProtobufOptional =
  _test_protobuf_assertDecode(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
    decode: typia.protobuf.createAssertDecode<ArraySimpleProtobufOptional>(),
    encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
  });
