import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createValidateEncode_ObjectSimpleProtobufNullable =
  (): void =>
    _test_protobuf_validateEncode(
      "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
      encode:
        typia.protobuf.createValidateEncode<ObjectSimpleProtobufNullable>(),
      decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
      message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
    });
