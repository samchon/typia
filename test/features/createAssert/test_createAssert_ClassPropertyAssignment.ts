import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createAssert_ClassPropertyAssignment = _test_assert(
    "ClassPropertyAssignment",
)<ClassPropertyAssignment>(
    ClassPropertyAssignment
)(typia.createAssert<ClassPropertyAssignment>());
