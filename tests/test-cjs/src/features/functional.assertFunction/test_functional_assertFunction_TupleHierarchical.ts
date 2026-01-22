import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertFunction_TupleHierarchical = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => TupleHierarchical) =>
    typia.functional.assertFunction(p),
  );
