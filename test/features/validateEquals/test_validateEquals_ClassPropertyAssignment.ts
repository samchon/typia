import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_validateEquals_ClassPropertyAssignment = _test_validateEquals(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)((input) => typia.validateEquals<ClassPropertyAssignment>(input));
