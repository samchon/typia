import typia from "../../../src";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_createIsDecode_DynamicTree = _test_protobuf_isDecode(
    "DynamicTree",
)<DynamicTree>(DynamicTree)({
    decode: (input) => typia.protobuf.isDecode<DynamicTree>(input),
    encode: typia.protobuf.createEncode<DynamicTree>(),
});
