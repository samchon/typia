import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_isClone_ClassPropertyAssignment = (): void =>
  _test_misc_isClone("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )((input) => typia.misc.isClone<ClassPropertyAssignment>(input));
