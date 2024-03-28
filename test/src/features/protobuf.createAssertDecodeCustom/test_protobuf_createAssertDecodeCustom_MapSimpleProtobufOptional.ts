import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createAssertDecodeCustom_MapSimpleProtobufOptional =
  _test_protobuf_assertDecode(CustomGuardError)(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
    decode: typia.protobuf.createAssertDecode<MapSimpleProtobufOptional>(
      (p) => new CustomGuardError(p),
    ),
    encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
  });
