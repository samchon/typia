import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_notation_createValidateKebab_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)<
      typia.KebabCase<ArrayRecursiveUnionExplicitPointer>
    >({
      convert:
        typia.notations.createValidateKebab<ArrayRecursiveUnionExplicitPointer>(),
      assert:
        typia.createAssert<
          typia.KebabCase<ArrayRecursiveUnionExplicitPointer>
        >(),
    });
