import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_protobuf_decode_ObjectRecursive = _test_protobuf_decode(
    "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)({
    decode: typia.protobuf.createDecode<ObjectRecursive>(),
    encode: typia.protobuf.createEncode<ObjectRecursive>(),
});
