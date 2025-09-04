import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_functional_assertReturn_ClassPropertyAssignment = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ClassPropertyAssignment")(
    ClassPropertyAssignment,
  )((p: (input: ClassPropertyAssignment) => ClassPropertyAssignment) =>
    typia.functional.assertReturn(p),
  );
