import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createValidateEncode_ArraySimpleProtobufOptional =
  _test_protobuf_validateEncode(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
    encode: (input) =>
      typia.protobuf.validateEncode<ArraySimpleProtobufOptional>(input),
    decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
    message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
  });
