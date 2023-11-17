import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_notation_validateSnake_ArrayRepeatedOptional =
  _test_notation_validateGeneral(
    "ArrayRepeatedOptional",
  )<ArrayRepeatedOptional>(ArrayRepeatedOptional)<
    typia.SnakeCase<ArrayRepeatedOptional>
  >({
    convert: (input) =>
      typia.notations.validateSnake<ArrayRepeatedOptional>(input),
    assert: typia.createAssert<typia.SnakeCase<ArrayRepeatedOptional>>(),
  });
