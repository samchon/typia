import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_createValidateDecode_ObjectSimpleProtobufOptional =
  (): void =>
    _test_protobuf_validateDecode(
      "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
      decode:
        typia.protobuf.createValidateDecode<ObjectSimpleProtobufOptional>(),
      encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
    });
