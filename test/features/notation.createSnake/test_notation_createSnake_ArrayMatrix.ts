import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_notation_createValidateSnake_ArrayMatrix =
  _test_notation_validateGeneral("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)<
    typia.SnakeCase<ArrayMatrix>
  >({
    convert: typia.notations.createValidateSnake<ArrayMatrix>(),
    assert: typia.createAssert<typia.SnakeCase<ArrayMatrix>>(),
  });
