import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_isDecode_MapSimpleProtobufOptional =
    _test_protobuf_isDecode(
        "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
        isDecode: typia.protobuf.createIsDecode<MapSimpleProtobufOptional>(),
        encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
    });
