import { ObjectSimple } from "@typia/template";
import typia, { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../internal/_test_misc_assertClone";

export const test_misc_assertClone_ObjectSimple = (): void =>
  _test_misc_assertClone(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )((input) => typia.misc.assertClone<ObjectSimple>(input));
