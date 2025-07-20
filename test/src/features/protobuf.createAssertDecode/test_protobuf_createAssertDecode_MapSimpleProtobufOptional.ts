import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createAssertDecode_MapSimpleProtobufOptional =
  (): void =>
    _test_protobuf_assertDecode(TypeGuardError)(
      "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
      decode: typia.protobuf.createAssertDecode<MapSimpleProtobufOptional>(),
      encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
    });
