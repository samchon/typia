import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_createAssertEncode_ClassPropertyAssignment =
    _test_protobuf_assertEncode(
        "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)({
        encode: (input) =>
            typia.protobuf.assertEncode<ClassPropertyAssignment>(input),
        decode: typia.protobuf.createDecode<ClassPropertyAssignment>(),
        message: typia.protobuf.message<ClassPropertyAssignment>(),
    });
