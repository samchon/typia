import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createAssertEncode_MapSimpleProtobufOptional =
  _test_protobuf_assertEncode(TypeGuardError)(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
    encode: typia.protobuf.createAssertEncode<MapSimpleProtobufOptional>(),
    decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
    message: typia.protobuf.message<MapSimpleProtobufOptional>(),
  });
