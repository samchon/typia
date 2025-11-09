import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_notation_validateSnake_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_notation_validateGeneral(
      "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)<
      typia.SnakeCase<ArrayRecursiveUnionExplicit>
    >({
      convert: (input) =>
        typia.notations.validateSnake<ArrayRecursiveUnionExplicit>(input),
      assert:
        typia.createAssert<typia.SnakeCase<ArrayRecursiveUnionExplicit>>(),
    });
