import typia from "typia";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_isDecode_MapSimpleProtobufOptional =
  _test_protobuf_isDecode(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
    decode: (input) =>
      typia.protobuf.isDecode<MapSimpleProtobufOptional>(input),
    encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
  });
