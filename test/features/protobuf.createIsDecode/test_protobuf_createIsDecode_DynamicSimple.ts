import typia from "../../../src";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_protobuf_createIsDecode_DynamicSimple = _test_protobuf_isDecode(
    "DynamicSimple",
)<DynamicSimple>(DynamicSimple)({
    decode: typia.protobuf.createIsDecode<DynamicSimple>(),
    encode: typia.protobuf.createEncode<DynamicSimple>(),
});
