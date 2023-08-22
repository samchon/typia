import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_isEncode_MapSimpleProtobufOptional =
    _test_protobuf_isEncode(
        "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
        isEncode: typia.protobuf.createIsEncode<MapSimpleProtobufOptional>(),
        message: typia.protobuf.message<MapSimpleProtobufOptional>(),
        decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
    });
