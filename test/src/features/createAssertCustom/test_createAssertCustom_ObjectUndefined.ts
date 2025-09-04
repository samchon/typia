import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertCustom_ObjectUndefined = (): void =>
  _test_assert(CustomGuardError)("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )(typia.createAssert<ObjectUndefined>((p) => new CustomGuardError(p)));
