import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_isEncode_MapSimpleProtobufNullable =
  _test_protobuf_isEncode(
    "MapSimpleProtobufNullable",
  )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
    encode: (input) =>
      typia.protobuf.isEncode<MapSimpleProtobufNullable>(input),
    decode: typia.protobuf.createDecode<MapSimpleProtobufNullable>(),
    message: typia.protobuf.message<MapSimpleProtobufNullable>(),
  });
