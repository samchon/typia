import typia from "typia";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_createIsEncode_MapSimpleProtobuf =
  _test_protobuf_isEncode("MapSimpleProtobuf")<MapSimpleProtobuf>(
    MapSimpleProtobuf,
  )({
    encode: (input) => typia.protobuf.isEncode<MapSimpleProtobuf>(input),
    decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
    message: typia.protobuf.message<MapSimpleProtobuf>(),
  });
