import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ArraySimpleProtobufOptional = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
  decode: (input) => typia.protobuf.assertDecode<ArraySimpleProtobufOptional>(input),
  encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
});
