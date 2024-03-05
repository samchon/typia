import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertFunctionCustom_TupleHierarchical =
  _test_functional_assertFunction(CustomGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => TupleHierarchical) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
