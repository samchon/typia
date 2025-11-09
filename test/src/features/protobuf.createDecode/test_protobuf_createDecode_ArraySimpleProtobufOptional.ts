import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createDecode_ArraySimpleProtobufOptional = (): void => _test_protobuf_decode(
  "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
  decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
  encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
});
