import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertParameters_TupleHierarchical = (): void =>
  _test_functional_assertParameters(TypeGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => TupleHierarchical) =>
    typia.functional.assertParameters(p),
  );
