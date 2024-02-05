import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_createAssertGuardEquals_ObjectDescription =
  _test_assertGuardEquals("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )(typia.createAssertGuardEquals<ObjectDescription>());
