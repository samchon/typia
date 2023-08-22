import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_encode_MapSimpleProtobuf = _test_protobuf_encode(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
    encode: (input) => typia.protobuf.encode<MapSimpleProtobuf>(input),
    message: typia.protobuf.message<MapSimpleProtobuf>(),
    decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
});
