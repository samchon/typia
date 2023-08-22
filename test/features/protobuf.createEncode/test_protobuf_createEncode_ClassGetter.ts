import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_encode_ClassGetter = _test_protobuf_encode(
    "ClassGetter",
)<ClassGetter>(ClassGetter)({
    encode: typia.protobuf.createEncode<ClassGetter>(),
    message: typia.protobuf.message<ClassGetter>(),
    decode: typia.protobuf.createDecode<ClassGetter>(),
});
