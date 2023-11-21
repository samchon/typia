import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_notation_validateSnake_ArrayRepeatedUnion =
  _test_notation_validateGeneral("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )<typia.SnakeCase<ArrayRepeatedUnion>>({
    convert: (input) =>
      typia.notations.validateSnake<ArrayRepeatedUnion>(input),
    assert: typia.createAssert<typia.SnakeCase<ArrayRepeatedUnion>>(),
  });
