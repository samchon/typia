import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_assertPrune_ObjectPrimitive = (): void =>
  _test_misc_assertPrune(TypeGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )((input) => typia.misc.assertPrune<ObjectPrimitive>(input));
