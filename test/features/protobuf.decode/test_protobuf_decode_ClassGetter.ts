import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_createDecode_ClassGetter = _test_protobuf_decode(
    "ClassGetter",
)<ClassGetter>(ClassGetter)({
    decode: (input) => typia.protobuf.decode<ClassGetter>(input),
    encode: typia.protobuf.createEncode<ClassGetter>(),
});
