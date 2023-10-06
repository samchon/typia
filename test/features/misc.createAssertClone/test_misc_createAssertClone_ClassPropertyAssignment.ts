import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_createAssertClone_ClassPropertyAssignment =
    _test_misc_assertClone("ClassPropertyAssignment")<ClassPropertyAssignment>(
        ClassPropertyAssignment,
    )(typia.misc.createAssertClone<ClassPropertyAssignment>());
