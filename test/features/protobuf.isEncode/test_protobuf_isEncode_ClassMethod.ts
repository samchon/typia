import typia from "../../../src";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_createIsEncode_ClassMethod = _test_protobuf_isEncode(
    "ClassMethod",
)<ClassMethod>(ClassMethod)({
    encode: (input) => typia.protobuf.isEncode<ClassMethod>(input),
    decode: typia.protobuf.createDecode<ClassMethod>(),
    message: typia.protobuf.message<ClassMethod>(),
});
