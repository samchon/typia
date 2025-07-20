import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_isDecode_ObjectSimpleProtobufOptional = (): void =>
  _test_protobuf_isDecode(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
    decode: (input) =>
      typia.protobuf.isDecode<ObjectSimpleProtobufOptional>(input),
    encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
  });
