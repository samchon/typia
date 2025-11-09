import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_assertEncode_MapSimpleProtobufNullable = (): void =>
  _test_protobuf_assertEncode(TypeGuardError)(
    "MapSimpleProtobufNullable",
  )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
    encode: (input) =>
      typia.protobuf.assertEncode<MapSimpleProtobufNullable>(input),
    decode: typia.protobuf.createDecode<MapSimpleProtobufNullable>(),
    message: typia.protobuf.message<MapSimpleProtobufNullable>(),
  });
