import typia from "../../../src";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_createValidateEncode_ArrayRecursive = _test_protobuf_validateEncode(
    "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
    encode: typia.protobuf.createValidateEncode<ArrayRecursive>(),
    decode: typia.protobuf.createDecode<ArrayRecursive>(),
    message: typia.protobuf.message<ArrayRecursive>(),
});
