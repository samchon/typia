import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_protobuf_assertDecode_ObjectSimpleProtobufOptional = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
  decode: (input) => typia.protobuf.assertDecode<ObjectSimpleProtobufOptional>(input),
  encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
});
