import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_protobuf_isEncode_ArraySimpleProtobufOptional = (): void => _test_protobuf_isEncode(
  "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
  encode: (input) => typia.protobuf.isEncode<ArraySimpleProtobufOptional>(input),
  decode: typia.protobuf.createDecode<ArraySimpleProtobufOptional>(),
  message: typia.protobuf.message<ArraySimpleProtobufOptional>(),
});
