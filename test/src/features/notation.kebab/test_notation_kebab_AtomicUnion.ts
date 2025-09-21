import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_notation_validateKebab_AtomicUnion = (): void =>
  _test_notation_validateGeneral("AtomicUnion")<AtomicUnion>(AtomicUnion)<
    typia.KebabCase<AtomicUnion>
  >({
    convert: (input) => typia.notations.validateKebab<AtomicUnion>(input),
    assert: typia.createAssert<typia.KebabCase<AtomicUnion>>(),
  });
