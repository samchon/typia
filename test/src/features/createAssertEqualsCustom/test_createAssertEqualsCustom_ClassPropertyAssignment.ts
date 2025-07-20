import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_createAssertEqualsCustom_ClassPropertyAssignment = (): void =>
  _test_assertEquals(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)(
    typia.createAssertEquals<ClassPropertyAssignment>(
      (p) => new CustomGuardError(p),
    ),
  );
