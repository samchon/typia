import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertEqualsParametersCustom_TupleHierarchical =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "TupleHierarchical",
    )(TupleHierarchical)((p: (input: TupleHierarchical) => TupleHierarchical) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
