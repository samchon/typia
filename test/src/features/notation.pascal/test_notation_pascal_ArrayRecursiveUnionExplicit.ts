import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_notation_validatePascal_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)<
      typia.PascalCase<ArrayRecursiveUnionExplicit>
    >({
      convert: (input) =>
        typia.notations.validatePascal<ArrayRecursiveUnionExplicit>(input),
      assert:
        typia.createAssert<typia.PascalCase<ArrayRecursiveUnionExplicit>>(),
    });
