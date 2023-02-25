import typia from "../../../src";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ClassPropertyAssignment = _test_clone(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createClone<ClassPropertyAssignment>(),
);
