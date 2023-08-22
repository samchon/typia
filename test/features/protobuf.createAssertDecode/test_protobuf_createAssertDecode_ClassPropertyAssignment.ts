import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_assertDecode_ClassPropertyAssignment =
    _test_protobuf_assertDecode(
        "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)({
        assertDecode:
            typia.protobuf.createAssertDecode<ClassPropertyAssignment>(),
        encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
    });
