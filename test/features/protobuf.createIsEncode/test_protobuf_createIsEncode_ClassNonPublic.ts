import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_isEncode_ClassNonPublic =
    _test_protobuf_isEncode<ClassNonPublic>(ClassNonPublic)({
        isEncode: typia.protobuf.createIsEncode<ClassNonPublic>(),
        message: typia.protobuf.message<ClassNonPublic>(),
    });
