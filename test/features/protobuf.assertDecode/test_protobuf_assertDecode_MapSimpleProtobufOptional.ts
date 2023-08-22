import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_assertDecode_MapSimpleProtobufOptional =
    _test_protobuf_assertDecode(
        "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<MapSimpleProtobufOptional>(input),
        encode: typia.protobuf.createEncode<MapSimpleProtobufOptional>(),
    });
