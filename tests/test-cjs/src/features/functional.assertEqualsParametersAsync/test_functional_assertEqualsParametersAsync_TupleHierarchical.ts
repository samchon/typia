import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertEqualsParametersAsync_TupleHierarchical =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "TupleHierarchical",
    )(TupleHierarchical)(
      (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
        typia.functional.assertEqualsParameters(p),
    );
