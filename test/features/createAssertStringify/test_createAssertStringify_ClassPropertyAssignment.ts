import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createAssertStringify_ClassPropertyAssignment =
    _test_assertStringify(
        "ClassPropertyAssignment",
        ClassPropertyAssignment.generate,
        typia.createAssertStringify<ClassPropertyAssignment>(),
        ClassPropertyAssignment.SPOILERS,
    );
