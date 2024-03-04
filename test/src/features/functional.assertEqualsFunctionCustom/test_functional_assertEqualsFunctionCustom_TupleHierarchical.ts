import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertEqualsFunctionCustom_TupleHierarchical =
  _test_functional_assertEqualsFunction(CustomGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => TupleHierarchical) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
