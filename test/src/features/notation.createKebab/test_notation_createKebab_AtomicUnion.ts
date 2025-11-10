import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_notation_createValidateKebab_AtomicUnion = (): void =>
  _test_notation_validateGeneral("AtomicUnion")<AtomicUnion>(AtomicUnion)<
    typia.KebabCase<AtomicUnion>
  >({
    convert: typia.notations.createValidateKebab<AtomicUnion>(),
    assert: typia.createAssert<typia.KebabCase<AtomicUnion>>(),
  });
