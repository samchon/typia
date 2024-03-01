import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_createAssertDecode_MapSimpleProtobuf =
  _test_protobuf_assertDecode(TypeGuardError)(
    "MapSimpleProtobuf",
  )<MapSimpleProtobuf>(MapSimpleProtobuf)({
    decode: typia.protobuf.createAssertDecode<MapSimpleProtobuf>(),
    encode: typia.protobuf.createEncode<MapSimpleProtobuf>(),
  });
