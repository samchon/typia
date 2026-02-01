import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_protobuf_createValidateEncode_ArraySimpleProtobufNullable = (): void => _test_protobuf_validateEncode(
  "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)({
  encode: typia.protobuf.createValidateEncode<ArraySimpleProtobufNullable>(),
  decode: typia.protobuf.createDecode<ArraySimpleProtobufNullable>(),
  message: typia.protobuf.message<ArraySimpleProtobufNullable>(),
});
