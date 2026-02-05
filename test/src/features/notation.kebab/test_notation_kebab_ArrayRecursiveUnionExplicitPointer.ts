import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_notation_validateKebab_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)<
      typia.KebabCase<ArrayRecursiveUnionExplicitPointer>
    >({
      convert: (input) =>
        typia.notations.validateKebab<ArrayRecursiveUnionExplicitPointer>(
          input,
        ),
      assert:
        typia.createAssert<
          typia.KebabCase<ArrayRecursiveUnionExplicitPointer>
        >(),
    });
