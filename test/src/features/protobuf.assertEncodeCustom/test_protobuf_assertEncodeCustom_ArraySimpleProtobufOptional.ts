import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ArraySimpleProtobufOptional =
  _test_protobuf_assertEncode(CustomGuardError)(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
    encode: (input) =>
      typia.protobuf.assertEncode<ArraySimpleProtobufOptional>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
    message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
  });
