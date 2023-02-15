import typia from "typia";

import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ClassPropertyAssignment = _test_stringify(
    "ClassPropertyAssignment",
    ClassPropertyAssignment.generate,
    typia.createStringify<ClassPropertyAssignment>(),
);
