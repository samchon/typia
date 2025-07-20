import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_createAssertEncode_MapSimpleProtobufNullable =
  (): void =>
    _test_protobuf_assertEncode(TypeGuardError)(
      "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
      encode: typia.protobuf.createAssertEncode<MapSimpleProtobufNullable>(),
      decode: typia.protobuf.createDecode<MapSimpleProtobufNullable>(),
      message: typia.protobuf.message<MapSimpleProtobufNullable>(),
    });
