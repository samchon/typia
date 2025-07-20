import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_assertClone_ObjectNullable = (): void =>
  _test_misc_assertClone(TypeGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )((input) => typia.misc.assertClone<ObjectNullable>(input));
