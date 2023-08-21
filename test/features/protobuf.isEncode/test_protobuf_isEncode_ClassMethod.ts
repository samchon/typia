import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_isEncode_ClassMethod = _test_protobuf_isEncode(
    "ClassMethod",
)<ClassMethod>(ClassMethod)({
    isEncode: (input) => typia.protobuf.isEncode<ClassMethod>(input),
    message: typia.protobuf.message<ClassMethod>(),
});
