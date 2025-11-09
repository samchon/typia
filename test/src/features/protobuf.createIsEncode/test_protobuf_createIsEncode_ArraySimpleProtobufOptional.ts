import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createIsEncode_ArraySimpleProtobufOptional = (): void => _test_protobuf_isEncode(
  "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
  encode: typia.protobuf.createIsEncode<ArraySimpleProtobufOptional>(),
  decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
  message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
});
