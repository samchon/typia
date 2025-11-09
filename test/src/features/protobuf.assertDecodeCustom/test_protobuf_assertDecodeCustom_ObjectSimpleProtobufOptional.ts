import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_ObjectSimpleProtobufOptional = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
  decode: (input) => typia.protobuf.assertDecode<ObjectSimpleProtobufOptional>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
});
