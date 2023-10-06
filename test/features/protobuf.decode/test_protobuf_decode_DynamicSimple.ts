import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_createDecode_DynamicSimple = _test_protobuf_decode(
    "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
    decode: (input) => typia.protobuf.decode<DynamicSimple>(input),
    encode: typia.protobuf.createEncode<DynamicSimple>(),
});
