import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createIsDecode_MapSimpleProtobufOptional =
  (): void =>
    _test_protobuf_isDecode(
      "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
      decode: typia.protobuf.createIsDecode<MapSimpleProtobufOptional>(),
      encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
    });
