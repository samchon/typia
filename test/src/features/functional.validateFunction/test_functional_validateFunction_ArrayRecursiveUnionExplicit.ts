import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_validateFunction_ArrayRecursiveUnionExplicit =
  _test_functional_validateFunction("ArrayRecursiveUnionExplicit")(
    ArrayRecursiveUnionExplicit,
  )((p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) =>
    typia.functional.validateFunction(p),
  );
