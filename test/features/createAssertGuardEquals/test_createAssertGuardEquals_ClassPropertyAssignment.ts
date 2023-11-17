import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createAssertGuardEquals_ClassPropertyAssignment =
    _test_assertGuardEquals("ClassPropertyAssignment")<ClassPropertyAssignment>(
        ClassPropertyAssignment,
    )(typia.createAssertGuardEquals<ClassPropertyAssignment>());
