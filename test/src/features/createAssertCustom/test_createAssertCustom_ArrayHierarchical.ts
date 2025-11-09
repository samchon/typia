import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createAssertCustom_ArrayHierarchical = (): void =>
  _test_assert(CustomGuardError)("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )(typia.createAssert<ArrayHierarchical>((p) => new CustomGuardError(p)));
