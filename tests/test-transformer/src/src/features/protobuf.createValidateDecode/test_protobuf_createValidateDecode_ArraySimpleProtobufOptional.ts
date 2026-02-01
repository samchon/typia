import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createValidateDecode_ArraySimpleProtobufOptional = (): void => _test_protobuf_validateDecode(
  "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
  decode: typia.protobuf.createValidateDecode<ArraySimpleProtobufOptional>(),
  encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
});
