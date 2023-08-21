import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_isEncode_ClassPropertyAssignment =
    _test_protobuf_isEncode("ClassPropertyAssignment")<ClassPropertyAssignment>(
        ClassPropertyAssignment,
    )({
        isEncode: typia.protobuf.createIsEncode<ClassPropertyAssignment>(),
        message: typia.protobuf.message<ClassPropertyAssignment>(),
    });
