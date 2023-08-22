import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_protobuf_assertDecode_ClassNonPublic =
    _test_protobuf_assertDecode("ClassNonPublic")<ClassNonPublic>(
        ClassNonPublic,
    )({
        assertDecode: typia.protobuf.createAssertDecode<ClassNonPublic>(),
        encode: typia.protobuf.createEncode<ClassNonPublic>(),
    });
