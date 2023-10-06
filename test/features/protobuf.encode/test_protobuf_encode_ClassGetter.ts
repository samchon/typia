import typia from "../../../src";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_createEncode_ClassGetter = _test_protobuf_encode(
    "ClassGetter",
)<ClassGetter>(ClassGetter)({
    encode: (input) => typia.protobuf.encode<ClassGetter>(input),
    decode: typia.protobuf.createDecode<ClassGetter>(),
    message: typia.protobuf.message<ClassGetter>(),
});
