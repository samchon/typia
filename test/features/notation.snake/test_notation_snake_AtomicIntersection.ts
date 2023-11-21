import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_notation_validateSnake_AtomicIntersection =
  _test_notation_validateGeneral("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )<typia.SnakeCase<AtomicIntersection>>({
    convert: (input) =>
      typia.notations.validateSnake<AtomicIntersection>(input),
    assert: typia.createAssert<typia.SnakeCase<AtomicIntersection>>(),
  });
