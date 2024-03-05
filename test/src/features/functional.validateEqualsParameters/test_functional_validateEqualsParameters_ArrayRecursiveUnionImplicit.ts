import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_validateEqualsParameters_ArrayRecursiveUnionImplicit =
  _test_functional_validateEqualsParameters("ArrayRecursiveUnionImplicit")(
    ArrayRecursiveUnionImplicit,
  )((p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) =>
    typia.functional.validateEqualsParameters(p),
  );
