import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createIsEncode_ObjectSimpleProtobufOptional =
  _test_protobuf_isEncode(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
    encode: typia.protobuf.createIsEncode<ObjectSimpleProtobufOptional>(),
    decode: typia.protobuf.createDecode<ObjectSimpleProtobufOptional>(),
    message: typia.protobuf.message<ObjectSimpleProtobufOptional>(),
  });
