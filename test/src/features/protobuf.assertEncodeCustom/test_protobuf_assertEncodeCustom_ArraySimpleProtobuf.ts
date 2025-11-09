import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_ArraySimpleProtobuf = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
  encode: (input) => typia.protobuf.assertEncode<ArraySimpleProtobuf>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<ArraySimpleProtobuf>(),
  message: typia.protobuf.message<ArraySimpleProtobuf>(),
});
