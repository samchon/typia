import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_createDecode_DynamicTree = _test_protobuf_decode(
    "DynamicTree",
)<DynamicTree>(DynamicTree)({
    decode: (input) => typia.protobuf.decode<DynamicTree>(input),
    encode: typia.protobuf.createEncode<DynamicTree>(),
});
