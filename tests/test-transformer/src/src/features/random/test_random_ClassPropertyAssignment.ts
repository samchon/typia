import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_random_ClassPropertyAssignment = (): void => _test_random("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment
)({
  random: () => typia.random<ClassPropertyAssignment>((ClassPropertyAssignment as any).RANDOM),
  assert: typia.createAssert<ClassPropertyAssignment>(),
});
