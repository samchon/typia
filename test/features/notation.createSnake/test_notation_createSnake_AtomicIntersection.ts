import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_notation_createValidateSnake_AtomicIntersection =
  _test_notation_validateGeneral("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )<typia.SnakeCase<AtomicIntersection>>({
    convert: typia.notations.createValidateSnake<AtomicIntersection>(),
    assert: typia.createAssert<typia.SnakeCase<AtomicIntersection>>(),
  });
