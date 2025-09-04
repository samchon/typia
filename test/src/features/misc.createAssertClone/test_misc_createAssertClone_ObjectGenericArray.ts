import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_createAssertClone_ObjectGenericArray = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)(
    typia.misc.createAssertClone<ObjectGenericArray>(),
  );
