import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_MapSimpleProtobuf = (): void => _test_protobuf_assertDecode(CustomGuardError)(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
  decode: (input) => typia.protobuf.assertDecode<MapSimpleProtobuf>(input, (p) => new CustomGuardError(p)),
  encode: typia.protobuf.createEncode<MapSimpleProtobuf>(),
});
