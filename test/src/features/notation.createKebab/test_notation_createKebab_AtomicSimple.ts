import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_notation_createValidateKebab_AtomicSimple = (): void =>
  _test_notation_validateGeneral("AtomicSimple")<AtomicSimple>(AtomicSimple)<
    typia.KebabCase<AtomicSimple>
  >({
    convert: typia.notations.createValidateKebab<AtomicSimple>(),
    assert: typia.createAssert<typia.KebabCase<AtomicSimple>>(),
  });
