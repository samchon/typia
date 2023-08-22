import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_validateEncode_MapSimpleProtobufNullable =
    _test_protobuf_validateEncode(
        "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
        validateEncode:
            typia.protobuf.createValidateEncode<MapSimpleProtobufNullable>(),
        message: typia.protobuf.message<MapSimpleProtobufNullable>(),
        decode: typia.protobuf.createDecode<MapSimpleProtobufNullable>(),
    });
