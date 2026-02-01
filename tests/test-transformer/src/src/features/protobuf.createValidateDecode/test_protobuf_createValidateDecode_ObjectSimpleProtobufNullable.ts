import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createValidateDecode_ObjectSimpleProtobufNullable = (): void => _test_protobuf_validateDecode(
  "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
  decode: typia.protobuf.createValidateDecode<ObjectSimpleProtobufNullable>(),
  encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
});
