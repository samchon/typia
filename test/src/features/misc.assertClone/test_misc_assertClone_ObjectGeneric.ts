import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_assertClone_ObjectGeneric = (): void =>
  _test_misc_assertClone(TypeGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )((input) => typia.misc.assertClone<ObjectGeneric>(input));
