import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assertStringify_ClassPropertyAssignment =
    _test_assertStringify(
        "ClassPropertyAssignment",
        ClassPropertyAssignment.generate,
        (input) => typia.assertStringify(input),
        ClassPropertyAssignment.SPOILERS,
    );
