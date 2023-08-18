import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_isEncode_ClassPropertyAssignment =
    _test_protobuf_isEncode<ClassPropertyAssignment>(ClassPropertyAssignment)({
        isEncode: (input) =>
            typia.protobuf.isEncode<ClassPropertyAssignment>(input),
        message: typia.protobuf.message<ClassPropertyAssignment>(),
    });
