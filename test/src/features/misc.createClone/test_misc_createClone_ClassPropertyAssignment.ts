import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_createClone_ClassPropertyAssignment = (): void =>
  _test_misc_clone("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )(typia.misc.createClone<ClassPropertyAssignment>());
