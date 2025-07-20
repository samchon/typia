import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertReturnCustom_TupleHierarchical = (): void =>
  _test_functional_assertReturn(CustomGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => TupleHierarchical) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
