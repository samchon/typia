import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_misc_assertCloneCustom_ObjectSimple = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )((input) =>
    typia.misc.assertClone<ObjectSimple>(input, (p) => new CustomGuardError(p)),
  );
