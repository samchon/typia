import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_assertClone_ObjectAlias = (): void =>
  _test_misc_assertClone(TypeGuardError)("ObjectAlias")<ObjectAlias>(
    ObjectAlias,
  )((input) => typia.misc.assertClone<ObjectAlias>(input));
