import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createEncode_ObjectSimpleProtobufOptional = (): void => _test_protobuf_encode(
  "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
  encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
  decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
  message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
});
