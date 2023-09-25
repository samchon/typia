import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_createEncode_MapSimpleProtobuf =
    _test_protobuf_encode("MapSimpleProtobuf")<MapSimpleProtobuf>(
        MapSimpleProtobuf,
    )({
        encode: typia.protobuf.createEncode<MapSimpleProtobuf>(),
        message: typia.protobuf.message<MapSimpleProtobuf>(),
        decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
    });
