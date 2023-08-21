import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_assertEncode_MapSimpleProtobuf =
    _test_protobuf_assertEncode("MapSimpleProtobuf")<MapSimpleProtobuf>(
        MapSimpleProtobuf,
    )({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<MapSimpleProtobuf>(input),
        message: typia.protobuf.message<MapSimpleProtobuf>(),
    });
