import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ObjectDescription =
  _test_misc_assertClone(TypeGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)(
    typia.misc.createAssertClone<ObjectDescription>(),
  );
