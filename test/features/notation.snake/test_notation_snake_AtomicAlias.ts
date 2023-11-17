import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_notation_validateSnake_AtomicAlias =
  _test_notation_validateGeneral("AtomicAlias")<AtomicAlias>(AtomicAlias)<
    typia.SnakeCase<AtomicAlias>
  >({
    convert: (input) => typia.notations.validateSnake<AtomicAlias>(input),
    assert: typia.createAssert<typia.SnakeCase<AtomicAlias>>(),
  });
