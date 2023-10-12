import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_createEncode_ClassNonPublic = _test_protobuf_encode(
    "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
    decode: typia.protobuf.createDecode<ClassNonPublic>(),
    message: typia.protobuf.message<ClassNonPublic>(),
});
