import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_protobuf_encode_ObjectRecursive = _test_protobuf_encode(
    "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)({
    encode: typia.protobuf.createEncode<ObjectRecursive>(),
    message: typia.protobuf.message<ObjectRecursive>(),
    decode: typia.protobuf.createDecode<ObjectRecursive>(),
});
