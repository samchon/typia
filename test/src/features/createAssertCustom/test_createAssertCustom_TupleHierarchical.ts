import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssertCustom_TupleHierarchical = (): void =>
  _test_assert(CustomGuardError)("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )(typia.createAssert<TupleHierarchical>((p) => new CustomGuardError(p)));
