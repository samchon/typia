import { ObjectSimple } from "@typia/template";
import typia, { TypeGuardError } from "typia";

import { _test_plain_assertClone } from "../internal/_test_plain_assertClone";

export const test_plain_assertClone_ObjectSimple = (): void =>
  _test_plain_assertClone(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )((input) => typia.plain.assertClone<ObjectSimple>(input));
