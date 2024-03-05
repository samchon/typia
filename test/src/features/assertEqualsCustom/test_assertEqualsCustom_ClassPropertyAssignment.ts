import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assertEqualsCustom_ClassPropertyAssignment =
  _test_assertEquals(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.assertEquals<ClassPropertyAssignment>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
