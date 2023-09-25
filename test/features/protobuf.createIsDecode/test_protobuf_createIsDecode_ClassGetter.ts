import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_protobuf_createIsDecode_ClassGetter = _test_protobuf_isDecode(
    "ClassGetter",
)<ClassGetter>(ClassGetter)({
    isDecode: typia.protobuf.createIsDecode<ClassGetter>(),
    encode: typia.protobuf.createEncode<ClassGetter>(),
});
