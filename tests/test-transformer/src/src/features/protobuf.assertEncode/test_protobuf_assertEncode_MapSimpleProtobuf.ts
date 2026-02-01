import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_protobuf_assertEncode_MapSimpleProtobuf = (): void => _test_protobuf_assertEncode(TypeGuardError)(
  "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
  encode: (input) => typia.protobuf.assertEncode<MapSimpleProtobuf>(input),
  decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
  message: typia.protobuf.message<MapSimpleProtobuf>(),
});
