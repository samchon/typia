import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_random_ClassPropertyAssignment = _test_random("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment
)({
    random: () => typia.random<ClassPropertyAssignment>(),
    assert: typia.createAssert<ClassPropertyAssignment>(),
});
