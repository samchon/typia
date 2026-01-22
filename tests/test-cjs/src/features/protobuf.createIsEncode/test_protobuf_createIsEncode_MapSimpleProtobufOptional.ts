import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createIsEncode_MapSimpleProtobufOptional =
  (): void =>
    _test_protobuf_isEncode(
      "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
      encode: typia.protobuf.createIsEncode<MapSimpleProtobufOptional>(),
      decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
      message: typia.protobuf.message<MapSimpleProtobufOptional>(),
    });
