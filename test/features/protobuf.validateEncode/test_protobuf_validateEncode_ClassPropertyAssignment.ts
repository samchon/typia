import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_validateEncode_ClassPropertyAssignment =
    _test_protobuf_validateEncode(
        "ClassPropertyAssignment",
    )<ClassPropertyAssignment>(ClassPropertyAssignment)({
        validateEncode: (input) =>
            typia.protobuf.validateEncode<ClassPropertyAssignment>(input),
        message: typia.protobuf.message<ClassPropertyAssignment>(),
        decode: typia.protobuf.createDecode<ClassPropertyAssignment>(),
    });
