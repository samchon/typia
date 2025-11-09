import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_assertCustom_ClassPropertyAssignment = (): void =>
  _test_assert(CustomGuardError)(
    "ClassPropertyAssignment",
  )<ClassPropertyAssignment>(ClassPropertyAssignment)((input) =>
    typia.assert<ClassPropertyAssignment>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
