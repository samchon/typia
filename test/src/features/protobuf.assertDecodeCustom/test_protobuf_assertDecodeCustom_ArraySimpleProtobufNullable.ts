import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ArraySimpleProtobufNullable = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
  decode: (input) => typia.protobuf.assertDecode<ArraySimpleProtobufNullable>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ArraySimpleProtobufNullable>(),
});
