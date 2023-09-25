import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_createDecode_ClassPropertyAssignment =
    _test_protobuf_decode("ClassPropertyAssignment")<ClassPropertyAssignment>(
        ClassPropertyAssignment,
    )({
        decode: typia.protobuf.createDecode<ClassPropertyAssignment>(),
        encode: typia.protobuf.createEncode<ClassPropertyAssignment>(),
    });
