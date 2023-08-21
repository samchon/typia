import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_encode_ArrayRecursive = _test_protobuf_encode(
    "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
    encode: (input) => typia.protobuf.encode<ArrayRecursive>(input),
    message: typia.protobuf.message<ArrayRecursive>(),
});
