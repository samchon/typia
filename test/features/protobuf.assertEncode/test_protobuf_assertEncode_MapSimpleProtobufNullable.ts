import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_assertEncode_MapSimpleProtobufNullable =
    _test_protobuf_assertEncode(
        "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<MapSimpleProtobufNullable>(input),
        message: typia.protobuf.message<MapSimpleProtobufNullable>(),
        decode: typia.protobuf.createDecode<MapSimpleProtobufNullable>(),
    });
