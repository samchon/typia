import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_createIsDecode_ArraySimpleProtobufOptional =
  _test_protobuf_isDecode(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
    decode: (input) =>
      typia.protobuf.isDecode<ArraySimpleProtobufOptional>(input),
    encode: typia.protobuf.createEncode<ArraySimpleProtobufOptional>(),
  });
