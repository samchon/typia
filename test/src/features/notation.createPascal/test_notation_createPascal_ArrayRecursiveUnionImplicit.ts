import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_notation_createValidatePascal_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)<
      typia.PascalCase<ArrayRecursiveUnionImplicit>
    >({
      convert:
        typia.notations.createValidatePascal<ArrayRecursiveUnionImplicit>(),
      assert:
        typia.createAssert<typia.PascalCase<ArrayRecursiveUnionImplicit>>(),
    });
