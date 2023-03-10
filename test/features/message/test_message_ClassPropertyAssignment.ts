import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_message_ClassPropertyAssignment = _test_message(
    "ClassPropertyAssignment",
    typia.message<ClassPropertyAssignment>(),
);
