import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createAssertClone_TypeTagTuple = (): void =>
  _test_misc_assertClone(TypeGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )(typia.misc.createAssertClone<TypeTagTuple>());
