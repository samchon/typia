import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_createAssertClone_ObjectOptional = (): void =>
  _test_misc_assertClone(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )(typia.misc.createAssertClone<ObjectOptional>());
