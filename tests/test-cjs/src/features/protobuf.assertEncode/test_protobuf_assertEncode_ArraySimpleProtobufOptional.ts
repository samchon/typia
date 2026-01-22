import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_assertEncode_ArraySimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertEncode(TypeGuardError)(
      "ArraySimpleProtobufOptional",
    )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
      encode: (input) =>
        typia.protobuf.assertEncode<ArraySimpleProtobufOptional>(input),
      decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
      message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
    });
