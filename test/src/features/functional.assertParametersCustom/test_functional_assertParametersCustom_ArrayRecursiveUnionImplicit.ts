import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_assertParametersCustom_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "ArrayRecursiveUnionImplicit",
    )(ArrayRecursiveUnionImplicit)(
      (
        p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit,
      ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
