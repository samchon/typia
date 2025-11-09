import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_encode_ObjectSimpleProtobufNullable = (): void => _test_protobuf_encode(
  "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
  encode: (input) => typia.protobuf.encode<ObjectSimpleProtobufNullable>(input),
  decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
  message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
});
