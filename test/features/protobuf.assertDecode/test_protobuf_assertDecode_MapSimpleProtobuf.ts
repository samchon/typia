import typia from "../../../src";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_protobuf_createAssertDecode_MapSimpleProtobuf = _test_protobuf_assertDecode(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(MapSimpleProtobuf)({
    decode: (input) => typia.protobuf.assertDecode<MapSimpleProtobuf>(input),
    encode: typia.protobuf.createEncode<MapSimpleProtobuf>(),
});
