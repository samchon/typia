import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_validateParameters_ArrayRecursiveUnionExplicit =
  _test_functional_validateParameters("ArrayRecursiveUnionExplicit")(
    ArrayRecursiveUnionExplicit,
  )((p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) =>
    typia.functional.validateParameters(p),
  );
