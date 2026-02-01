import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_MapSimpleProtobufNullable = (): void => _test_protobuf_assertDecode(TypeGuardError)(
  "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
  decode: typia.protobuf.createAssertDecode<MapSimpleProtobufNullable>(),
  encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
});
