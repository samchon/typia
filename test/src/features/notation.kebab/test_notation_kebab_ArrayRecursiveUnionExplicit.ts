import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_notation_validateKebab_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)<
      typia.KebabCase<ArrayRecursiveUnionExplicit>
    >({
      convert: (input) =>
        typia.notations.validateKebab<ArrayRecursiveUnionExplicit>(input),
      assert:
        typia.createAssert<typia.KebabCase<ArrayRecursiveUnionExplicit>>(),
    });
