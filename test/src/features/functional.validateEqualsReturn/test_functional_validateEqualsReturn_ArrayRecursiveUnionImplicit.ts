import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_validateEqualsReturn_ArrayRecursiveUnionImplicit =
  _test_functional_validateEqualsReturn("ArrayRecursiveUnionImplicit")(
    ArrayRecursiveUnionImplicit,
  )((p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) =>
    typia.functional.validateEqualsReturn(p),
  );
