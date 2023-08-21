import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_validateEncode_MapSimpleProtobuf =
    _test_protobuf_validateEncode("MapSimpleProtobuf")<MapSimpleProtobuf>(
        MapSimpleProtobuf,
    )({
        validateEncode:
            typia.protobuf.createValidateEncode<MapSimpleProtobuf>(),
        message: typia.protobuf.message<MapSimpleProtobuf>(),
    });
