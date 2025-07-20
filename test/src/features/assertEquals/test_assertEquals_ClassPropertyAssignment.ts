import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assertEquals_ClassPropertyAssignment = (): void =>
  _test_assertEquals(TypeGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.assertEquals<ClassPropertyAssignment>(input),
  );
