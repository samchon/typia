import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_assertDecode_MapSimpleProtobufNullable =
  _test_protobuf_assertDecode(TypeGuardError)(
    "MapSimpleProtobufNullable",
  )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
    decode: (input) =>
      typia.protobuf.assertDecode<MapSimpleProtobufNullable>(input),
    encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
  });
