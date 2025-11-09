import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createAssertDecode_ArraySimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertDecode(TypeGuardError)(
      "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
      decode: typia.protobuf.createAssertDecode<ArraySimpleProtobufOptional>(),
      encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
    });
