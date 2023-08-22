import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_protobuf_isDecode_ObjectRecursive = _test_protobuf_isDecode(
    "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)({
    isDecode: (input) => typia.protobuf.isDecode<ObjectRecursive>(input),
    encode: typia.protobuf.createEncode<ObjectRecursive>(),
});
