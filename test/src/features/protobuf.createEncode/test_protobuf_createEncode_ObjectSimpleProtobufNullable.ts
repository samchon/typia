import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_createEncode_ObjectSimpleProtobufNullable =
  (): void =>
    _test_protobuf_encode(
      "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
      encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
      decode: typia.protobuf.createDecode<ObjectSimpleProtobufNullable>(),
      message: typia.protobuf.message<ObjectSimpleProtobufNullable>(),
    });
