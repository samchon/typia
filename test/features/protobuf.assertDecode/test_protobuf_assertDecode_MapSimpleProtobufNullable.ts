import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_assertDecode_MapSimpleProtobufNullable =
    _test_protobuf_assertDecode(
        "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<MapSimpleProtobufNullable>(input),
        encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
    });
