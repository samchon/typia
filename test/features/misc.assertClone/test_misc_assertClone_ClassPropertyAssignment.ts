import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_assertClone_ClassPropertyAssignment =
    _test_misc_assertClone<ClassPropertyAssignment>(ClassPropertyAssignment)(
        (input) => typia.misc.assertClone<ClassPropertyAssignment>(input),
    );
