import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_assertEncode_MapSimpleProtobuf =
  _test_protobuf_assertEncode(TypeGuardError)(
    "MapSimpleProtobuf",
  )<MapSimpleProtobuf>(MapSimpleProtobuf)({
    encode: (input) => typia.protobuf.assertEncode<MapSimpleProtobuf>(input),
    decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
    message: typia.protobuf.message<MapSimpleProtobuf>(),
  });
