import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_validateEncode_MapSimpleProtobufOptional =
    _test_protobuf_validateEncode(
        "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<MapSimpleProtobufOptional>(input),
        message: typia.protobuf.message<MapSimpleProtobufOptional>(),
        decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
    });
