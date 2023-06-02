import typia from "../../../src";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_createValidateEquals_ClassPropertyAssignment = _test_validateEquals(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createValidateEquals<ClassPropertyAssignment>(),
);
