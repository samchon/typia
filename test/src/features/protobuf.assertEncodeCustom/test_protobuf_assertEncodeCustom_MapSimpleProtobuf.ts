import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_MapSimpleProtobuf =
  _test_protobuf_assertEncode(CustomGuardError)(
    "MapSimpleProtobuf",
  )<MapSimpleProtobuf>(MapSimpleProtobuf)({
    encode: (input) =>
      typia.protobuf.assertEncode<MapSimpleProtobuf>(
        input,
        (p) => new CustomGuardError(p),
      ),
    decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
    message: typia.protobuf.message<MapSimpleProtobuf>(),
  });
