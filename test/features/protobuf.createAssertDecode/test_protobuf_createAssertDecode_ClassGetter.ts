import typia from "../../../src";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_createAssertDecode_ClassGetter = _test_protobuf_assertDecode(
    "ClassGetter",
)<ClassGetter>(ClassGetter)({
    decode: typia.protobuf.createAssertDecode<ClassGetter>(),
    encode: typia.protobuf.createEncode<ClassGetter>(),
});
