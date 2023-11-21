import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_notation_createValidateSnake_ArrayRecursiveUnionExplicit =
  _test_notation_validateGeneral(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)<
    typia.SnakeCase<ArrayRecursiveUnionExplicit>
  >({
    convert: typia.notations.createValidateSnake<ArrayRecursiveUnionExplicit>(),
    assert: typia.createAssert<typia.SnakeCase<ArrayRecursiveUnionExplicit>>(),
  });
