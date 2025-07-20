import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_assertClone_ObjectPrimitive = (): void =>
  _test_misc_assertClone(TypeGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )((input) => typia.misc.assertClone<ObjectPrimitive>(input));
