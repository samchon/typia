import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createIsDecode_ObjectSimpleProtobufNullable = (): void => _test_protobuf_isDecode(
  "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
  decode: typia.protobuf.createIsDecode<ObjectSimpleProtobufNullable>(),
  encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
});
