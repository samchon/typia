import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertEncodeCustom_MapSimpleProtobufOptional = (): void => _test_protobuf_assertEncode(CustomGuardError)(
  "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
  encode: (input) => typia.protobuf.assertEncode<MapSimpleProtobufOptional>(input, (p) => new CustomGuardError(p)),
  decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
  message: typia.protobuf.message<MapSimpleProtobufOptional>(),
});
