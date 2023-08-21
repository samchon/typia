import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_assertEncode_ClassPropertyAssignment =
    _test_protobuf_assertEncode(
        "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)({
        assertEncode: (input) =>
            typia.protobuf.assertEncode<ClassPropertyAssignment>(input),
        message: typia.protobuf.message<ClassPropertyAssignment>(),
    });
