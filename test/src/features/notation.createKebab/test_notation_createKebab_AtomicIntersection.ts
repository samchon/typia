import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_notation_createValidateKebab_AtomicIntersection = (): void =>
  _test_notation_validateGeneral("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )<typia.KebabCase<AtomicIntersection>>({
    convert: typia.notations.createValidateKebab<AtomicIntersection>(),
    assert: typia.createAssert<typia.KebabCase<AtomicIntersection>>(),
  });
