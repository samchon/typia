import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ArraySimpleProtobuf = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(ArraySimpleProtobuf)({
  decode: (input) => typia.protobuf.assertDecode<ArraySimpleProtobuf>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ArraySimpleProtobuf>(),
});
