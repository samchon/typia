import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_createAssertEncodeCustom_MapSimpleProtobufNullable =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
      encode: typia.protobuf.createAssertEncode<MapSimpleProtobufNullable>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<MapSimpleProtobufNullable>(),
      message: typia.protobuf.message<MapSimpleProtobufNullable>(),
    });
