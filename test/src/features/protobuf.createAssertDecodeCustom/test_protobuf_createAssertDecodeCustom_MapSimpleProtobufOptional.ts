import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_createAssertDecodeCustom_MapSimpleProtobufOptional = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
  decode: typia.protobuf.createAssertDecode<MapSimpleProtobufOptional>((p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
});
