import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_assertGuardCustom_TupleHierarchical = (): void =>
  _test_assertGuard(CustomGuardError)("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )((input) =>
    typia.assertGuard<TupleHierarchical>(input, (p) => new CustomGuardError(p)),
  );
