import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_misc_createAssertClone_ObjectDynamic = (): void =>
  _test_misc_assertClone(TypeGuardError)("ObjectDynamic")<ObjectDynamic>(
    ObjectDynamic,
  )(typia.misc.createAssertClone<ObjectDynamic>());
