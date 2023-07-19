import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_clone_ClassPropertyAssignment =
    _test_misc_clone<ClassPropertyAssignment>(ClassPropertyAssignment)(
        (input) => typia.misc.clone(input),
    );
