import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertParametersCustom_TupleHierarchical =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("TupleHierarchical")(
      TupleHierarchical,
    )((p: (input: TupleHierarchical) => TupleHierarchical) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
