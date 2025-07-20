import typia from "typia";

import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_validateDecode_MapSimpleProtobufNullable =
  (): void =>
    _test_protobuf_validateDecode(
      "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
      decode: (input) =>
        typia.protobuf.validateDecode<MapSimpleProtobufNullable>(input),
      encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
    });
