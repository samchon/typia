import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createAssertEncodeCustom_MapSimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertEncode(CustomGuardError)(
      "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
      encode: typia.protobuf.createAssertEncode<MapSimpleProtobufOptional>(
        (p) => new CustomGuardError(p),
      ),
      decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
      message: typia.protobuf.message<MapSimpleProtobufOptional>(),
    });
