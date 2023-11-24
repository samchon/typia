import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_notation_validatePascal_ArrayRecursiveUnionImplicit =
  _test_notation_validateGeneral(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)<
    typia.PascalCase<ArrayRecursiveUnionImplicit>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ArrayRecursiveUnionImplicit>(input),
    assert: typia.createAssert<typia.PascalCase<ArrayRecursiveUnionImplicit>>(),
  });
