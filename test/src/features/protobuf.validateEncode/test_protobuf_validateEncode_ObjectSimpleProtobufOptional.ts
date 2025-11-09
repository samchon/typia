import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_validateEncode_ObjectSimpleProtobufOptional = (): void => _test_protobuf_validateEncode(
  "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
  encode: (input) => typia.protobuf.validateEncode<ObjectSimpleProtobufOptional>(input),
  decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
  message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
});
