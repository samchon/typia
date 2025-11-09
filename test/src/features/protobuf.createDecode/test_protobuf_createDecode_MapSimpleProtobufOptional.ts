import typia from "typia";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createDecode_MapSimpleProtobufOptional = (): void =>
  _test_protobuf_decode("MapSimpleProtobufOptional")<MapSimpleProtobufOptional>(
    MapSimpleProtobufOptional,
  )({
    decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
    encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
  });
