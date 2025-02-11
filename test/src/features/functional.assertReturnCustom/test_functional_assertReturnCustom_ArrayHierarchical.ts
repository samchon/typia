import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_functional_assertReturnCustom_ArrayHierarchical =
  _test_functional_assertReturn(CustomGuardError)("ArrayHierarchical")(
    ArrayHierarchical,
  )((p: (input: ArrayHierarchical) => ArrayHierarchical) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
