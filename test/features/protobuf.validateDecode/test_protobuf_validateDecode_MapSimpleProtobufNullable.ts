import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_validateDecode_MapSimpleProtobufNullable =
    _test_protobuf_validateDecode(
        "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<MapSimpleProtobufNullable>(input),
        encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
    });
