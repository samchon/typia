import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_notation_validateCamel_AtomicIntersection = (): void =>
  _test_notation_validateGeneral("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )<typia.CamelCase<AtomicIntersection>>({
    convert: (input) =>
      typia.notations.validateCamel<AtomicIntersection>(input),
    assert: typia.createAssert<typia.CamelCase<AtomicIntersection>>(),
  });
