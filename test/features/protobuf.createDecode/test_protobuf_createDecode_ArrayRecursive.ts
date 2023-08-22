import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_protobuf_decode_ArrayRecursive = _test_protobuf_decode(
    "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)({
    decode: typia.protobuf.createDecode<ArrayRecursive>(),
    encode: typia.protobuf.createEncode<ArrayRecursive>(),
});
