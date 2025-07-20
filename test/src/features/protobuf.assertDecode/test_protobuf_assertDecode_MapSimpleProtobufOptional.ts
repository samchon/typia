import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_assertDecode_MapSimpleProtobufOptional = (): void =>
  _test_protobuf_assertDecode(TypeGuardError)(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
    decode: (input) =>
      typia.protobuf.assertDecode<MapSimpleProtobufOptional>(input),
    encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
  });
