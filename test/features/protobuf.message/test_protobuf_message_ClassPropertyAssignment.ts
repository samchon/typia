import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_protobuf_message_ClassPropertyAssignment =
    _test_protobuf_message("ClassPropertyAssignment")(
        typia.protobuf.message<ClassPropertyAssignment>(),
    );
