import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_is_ClassPropertyAssignment = (): void =>
  _test_is("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )((input) => typia.is<ClassPropertyAssignment>(input));
