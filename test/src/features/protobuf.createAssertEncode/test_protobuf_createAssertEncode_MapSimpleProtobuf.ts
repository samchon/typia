import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_createAssertEncode_MapSimpleProtobuf =
  _test_protobuf_assertEncode(TypeGuardError)(
    "MapSimpleProtobuf",
  )<MapSimpleProtobuf>(MapSimpleProtobuf)({
    encode: typia.protobuf.createAssertEncode<MapSimpleProtobuf>(),
    decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
    message: typia.protobuf.message<MapSimpleProtobuf>(),
  });
