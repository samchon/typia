import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_protobuf_encode_ObjectRecursive = _test_protobuf_encode(
    "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)({
    encode: (input) => typia.protobuf.encode<ObjectRecursive>(input),
    message: typia.protobuf.message<ObjectRecursive>(),
    decode: typia.protobuf.createDecode<ObjectRecursive>(),
});
