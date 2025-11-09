import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ArraySimpleProtobufNullable = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
  encode: (input) => typia.protobuf.assertEncode<ArraySimpleProtobufNullable>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
  message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
});
