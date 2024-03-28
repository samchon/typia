import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createAssertDecode_ObjectSimpleProtobufOptional =
  _test_protobuf_assertDecode(TypeGuardError)(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
    decode: typia.protobuf.createAssertDecode<ObjectSimpleProtobufOptional>(),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
  });
