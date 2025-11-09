import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_assertEqualsFunctionCustom_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "ArrayRecursiveUnionImplicit",
    )(ArrayRecursiveUnionImplicit)(
      (
        p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit,
      ) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
