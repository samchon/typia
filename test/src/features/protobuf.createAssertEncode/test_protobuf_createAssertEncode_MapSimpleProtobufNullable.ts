import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertEncode_MapSimpleProtobufNullable =
  _test_protobuf_assertEncode(TypeGuardError)(
    "MapSimpleProtobufNullable",
  )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
    encode: typia.protobuf.createAssertEncode<MapSimpleProtobufNullable>(),
    decode: typia.protobuf.createDecode<MapSimpleProtobufNullable>(),
    message: typia.protobuf.message<MapSimpleProtobufNullable>(),
  });
