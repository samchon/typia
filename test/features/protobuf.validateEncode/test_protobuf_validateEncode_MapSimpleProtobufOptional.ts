import typia from "../../../src";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createValidateEncode_MapSimpleProtobufOptional = _test_protobuf_validateEncode(
    "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
    encode: (input) => typia.protobuf.validateEncode<MapSimpleProtobufOptional>(input),
    decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
    message: typia.protobuf.message<MapSimpleProtobufOptional>(),
});
