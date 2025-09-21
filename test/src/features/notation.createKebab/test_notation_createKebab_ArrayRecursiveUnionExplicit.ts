import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_notation_createValidateKebab_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)<
      typia.KebabCase<ArrayRecursiveUnionExplicit>
    >({
      convert:
        typia.notations.createValidateKebab<ArrayRecursiveUnionExplicit>(),
      assert:
        typia.createAssert<typia.KebabCase<ArrayRecursiveUnionExplicit>>(),
    });
