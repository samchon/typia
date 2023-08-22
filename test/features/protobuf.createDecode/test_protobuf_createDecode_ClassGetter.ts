import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_decode_ClassGetter = _test_protobuf_decode(
    "ClassGetter",
)<ClassGetter>(ClassGetter)({
    decode: typia.protobuf.createDecode<ClassGetter>(),
    encode: typia.protobuf.createEncode<ClassGetter>(),
});
