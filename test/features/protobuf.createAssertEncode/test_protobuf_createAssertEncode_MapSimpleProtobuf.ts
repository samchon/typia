import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_createAssertEncode_MapSimpleProtobuf =
    _test_protobuf_assertEncode("MapSimpleProtobuf")<MapSimpleProtobuf>(
        MapSimpleProtobuf,
    )({
        encode: typia.protobuf.createAssertEncode<MapSimpleProtobuf>(),
        decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
        message: typia.protobuf.message<MapSimpleProtobuf>(),
    });
