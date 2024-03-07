import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ObjectNullable =
  _test_misc_assertClone(TypeGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )(typia.misc.createAssertClone<ObjectNullable>());
