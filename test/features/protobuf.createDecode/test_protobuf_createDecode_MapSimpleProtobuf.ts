import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_decode_MapSimpleProtobuf = _test_protobuf_decode(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
    decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
    encode: typia.protobuf.createEncode<MapSimpleProtobuf>(),
});
