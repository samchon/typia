import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_isEncode_MapSimpleProtobuf = _test_protobuf_isEncode(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
    isEncode: (input) => typia.protobuf.isEncode<MapSimpleProtobuf>(input),
    message: typia.protobuf.message<MapSimpleProtobuf>(),
    decode: typia.protobuf.createDecode<MapSimpleProtobuf>(),
});
