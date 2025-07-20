import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_assertEncode_ObjectSimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertEncode(TypeGuardError)(
      "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
      encode: (input) =>
        typia.protobuf.assertEncode<ObjectSimpleProtobufOptional>(input),
      decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
      message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
    });
