import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_createAssertCustom_ObjectDescription = (): void =>
  _test_assert(CustomGuardError)("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )(typia.createAssert<ObjectDescription>((p) => new CustomGuardError(p)));
