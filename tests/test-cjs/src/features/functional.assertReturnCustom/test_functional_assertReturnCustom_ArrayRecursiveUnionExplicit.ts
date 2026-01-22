import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_assertReturnCustom_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)(
      "ArrayRecursiveUnionExplicit",
    )(ArrayRecursiveUnionExplicit)(
      (
        p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit,
      ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
