import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertEncodeCustom_ArraySimpleProtobuf =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ArraySimpleProtobuf",
  )<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
    encode: typia.protobuf.createAssertEncode<ArraySimpleProtobuf>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<ArraySimpleProtobuf>(),
    message: typia.protobuf.message<ArraySimpleProtobuf>(),
  });
