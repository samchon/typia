import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ArrayHierarchical =
  _test_functional_assertParameters(CustomGuardError)("ArrayHierarchical")(
    ArrayHierarchical,
  )((p: (input: ArrayHierarchical) => ArrayHierarchical) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
