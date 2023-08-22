import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_isDecode_ClassNonPublic = _test_protobuf_isDecode(
    "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
    isDecode: typia.protobuf.createIsDecode<ClassNonPublic>(),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
});
