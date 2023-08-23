import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_validateDecode_ClassPropertyAssignment =
    _test_protobuf_validateDecode(
        "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ClassPropertyAssignment>(input),
        encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
    });
