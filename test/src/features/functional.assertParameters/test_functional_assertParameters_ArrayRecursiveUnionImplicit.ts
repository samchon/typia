import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_assertParameters_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)(
      "ArrayRecursiveUnionImplicit",
    )(ArrayRecursiveUnionImplicit)(
      (
        p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit,
      ) => typia.functional.assertParameters(p),
    );
