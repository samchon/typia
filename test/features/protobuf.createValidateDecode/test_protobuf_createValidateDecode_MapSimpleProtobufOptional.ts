import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createValidateDecode_MapSimpleProtobufOptional =
    _test_protobuf_validateDecode(
        "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
        validateDecode:
            typia.protobuf.createValidateDecode<MapSimpleProtobufOptional>(),
        encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
    });
