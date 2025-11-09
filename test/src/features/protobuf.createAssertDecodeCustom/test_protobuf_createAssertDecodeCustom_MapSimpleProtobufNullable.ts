import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_MapSimpleProtobufNullable = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
  decode: typia.protobuf.createAssertDecode<MapSimpleProtobufNullable>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
});
