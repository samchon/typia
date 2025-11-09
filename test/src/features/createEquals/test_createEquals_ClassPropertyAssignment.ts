import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createEquals_ClassPropertyAssignment = (): void =>
  _test_equals("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )(typia.createEquals<ClassPropertyAssignment>());
