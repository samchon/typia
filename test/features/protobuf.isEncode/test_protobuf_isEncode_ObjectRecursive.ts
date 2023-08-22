import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_protobuf_isEncode_ObjectRecursive = _test_protobuf_isEncode(
    "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)({
    isEncode: (input) => typia.protobuf.isEncode<ObjectRecursive>(input),
    message: typia.protobuf.message<ObjectRecursive>(),
    decode: typia.protobuf.createDecode<ObjectRecursive>(),
});
