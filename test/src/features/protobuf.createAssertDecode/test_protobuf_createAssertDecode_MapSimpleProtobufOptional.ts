import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_protobuf_createAssertDecode_MapSimpleProtobufOptional =
  _test_protobuf_assertDecode(TypeGuardError)(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
    decode: typia.protobuf.createAssertDecode<MapSimpleProtobufOptional>(),
    encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
  });
