import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_encode_ClassNonPublic =
    _test_protobuf_encode<ClassNonPublic>(ClassNonPublic)({
        encode: (input) => typia.protobuf.encode<ClassNonPublic>(input),
        message: typia.protobuf.message<ClassNonPublic>(),
    });
