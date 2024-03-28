import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_createAssertEncodeCustom_MapSimpleProtobuf =
  _test_protobuf_assertEncode(CustomGuardError)(
    "MapSimpleProtobuf",
  )<MapSimpleProtobuf>(MapSimpleProtobuf)({
    encode: typia.protobuf.createAssertEncode<MapSimpleProtobuf>(
      (p) => new CustomGuardError(p),
    ),
    decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
    message: typia.protobuf.message<MapSimpleProtobuf>(),
  });
