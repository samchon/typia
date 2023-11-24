import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_createIsClone_ClassPropertyAssignment =
  _test_misc_isClone("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )(typia.misc.createIsClone<ClassPropertyAssignment>());
