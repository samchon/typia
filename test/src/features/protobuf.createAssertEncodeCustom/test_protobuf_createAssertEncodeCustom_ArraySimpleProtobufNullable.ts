import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createAssertEncodeCustom_ArraySimpleProtobufNullable =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
    encode: typia.protobuf.createAssertEncode<ArraySimpleProtobufNullable>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
    message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
  });
