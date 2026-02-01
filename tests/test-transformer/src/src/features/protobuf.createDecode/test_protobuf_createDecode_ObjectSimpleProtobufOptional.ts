import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createDecode_ObjectSimpleProtobufOptional = (): void => _test_protobuf_decode(
  "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
  decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
  encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
});
