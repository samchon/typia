import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_validateDecode_ObjectSimpleProtobufOptional = (): void => _test_protobuf_validateDecode(
  "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
  decode: (input) => typia.protobuf.validateDecode<ObjectSimpleProtobufOptional>(input),
  encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
});
