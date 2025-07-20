import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_notation_createValidatePascal_AtomicIntersection = (): void =>
  _test_notation_validateGeneral("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )<typia.PascalCase<AtomicIntersection>>({
    convert: typia.notations.createValidatePascal<AtomicIntersection>(),
    assert: typia.createAssert<typia.PascalCase<AtomicIntersection>>(),
  });
