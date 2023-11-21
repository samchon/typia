import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_notation_createValidateSnake_ArrayRepeatedUnionWithTuple =
  _test_notation_validateGeneral(
    "ArrayRepeatedUnionWithTuple",
  )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)<
    typia.SnakeCase<ArrayRepeatedUnionWithTuple>
  >({
    convert: typia.notations.createValidateSnake<ArrayRepeatedUnionWithTuple>(),
    assert: typia.createAssert<typia.SnakeCase<ArrayRepeatedUnionWithTuple>>(),
  });
