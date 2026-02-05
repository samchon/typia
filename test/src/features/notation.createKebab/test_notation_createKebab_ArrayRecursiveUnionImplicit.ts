import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_notation_createValidateKebab_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)<
      typia.KebabCase<ArrayRecursiveUnionImplicit>
    >({
      convert:
        typia.notations.createValidateKebab<ArrayRecursiveUnionImplicit>(),
      assert:
        typia.createAssert<typia.KebabCase<ArrayRecursiveUnionImplicit>>(),
    });
