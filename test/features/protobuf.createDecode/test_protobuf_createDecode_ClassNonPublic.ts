import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_decode_ClassNonPublic = _test_protobuf_decode(
    "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
    decode: typia.protobuf.createDecode<ClassNonPublic>(),
    encode: typia.protobuf.createEncode<ClassNonPublic>(),
});
