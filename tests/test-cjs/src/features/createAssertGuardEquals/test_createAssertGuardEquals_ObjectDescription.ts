import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_createAssertGuardEquals_ObjectDescription = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)(
    typia.createAssertGuardEquals<ObjectDescription>(),
  );
