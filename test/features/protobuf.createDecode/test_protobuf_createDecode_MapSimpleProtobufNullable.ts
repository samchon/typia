import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_protobuf_createDecode_MapSimpleProtobufNullable = _test_protobuf_decode(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)({
    decode: typia.protobuf.createDecode<MapSimpleProtobufNullable>(),
    encode: typia.protobuf.createEncode<MapSimpleProtobufNullable>(),
});
