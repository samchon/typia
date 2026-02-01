import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createIsDecode_ArraySimpleProtobufOptional = (): void => _test_protobuf_isDecode(
  "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
  decode: typia.protobuf.createIsDecode<ArraySimpleProtobufOptional>(),
  encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
});
