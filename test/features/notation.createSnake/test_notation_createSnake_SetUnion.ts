import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetUnion } from "../../structures/SetUnion";

export const test_notation_createValidateSnake_SetUnion =
  _test_notation_validateGeneral("SetUnion")<SetUnion>(SetUnion)<
    typia.SnakeCase<SetUnion>
  >({
    convert: typia.notations.createValidateSnake<SetUnion>(),
    assert: typia.createAssert<typia.SnakeCase<SetUnion>>(),
  });
