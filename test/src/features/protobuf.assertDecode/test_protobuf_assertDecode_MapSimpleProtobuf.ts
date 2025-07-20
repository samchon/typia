import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_assertDecode_MapSimpleProtobuf = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "MapSimpleProtobuf",
  )<MapSimpleProtobuf>(MapSimpleProtobuf)({
    decode: (input) => typia.protobuf.assertDecode<MapSimpleProtobuf>(input),
    encode: typia.protobuf.createEncode<MapSimpleProtobuf>(),
  });
