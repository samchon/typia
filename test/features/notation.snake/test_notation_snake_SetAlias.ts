import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetAlias } from "../../structures/SetAlias";

export const test_notation_validateSnake_SetAlias =
  _test_notation_validateGeneral("SetAlias")<SetAlias>(SetAlias)<
    typia.SnakeCase<SetAlias>
  >({
    convert: (input) => typia.notations.validateSnake<SetAlias>(input),
    assert: typia.createAssert<typia.SnakeCase<SetAlias>>(),
  });
