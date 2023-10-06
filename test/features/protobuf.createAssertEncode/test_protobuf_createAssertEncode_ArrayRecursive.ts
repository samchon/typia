import typia from "../../../src";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createAssertEncode_ArrayRecursive = _test_protobuf_assertEncode(
    "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
    encode: typia.protobuf.createAssertEncode<ArrayRecursive>(),
    decode: typia.protobuf.createDecode<ArrayRecursive>(),
    message: typia.protobuf.message<ArrayRecursive>(),
});
