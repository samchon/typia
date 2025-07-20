import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createAssertDecode_ArraySimpleProtobufNullable =
  (): void =>
    _test_protobuf_assertDecode(TypeGuardError)(
      "ArraySimpleProtobufNullable",
    )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
      decode: typia.protobuf.createAssertDecode<ArraySimpleProtobufNullable>(),
      encode: typia.protobuf.createEncode<ArraySimpleProtobufNullable>(),
    });
