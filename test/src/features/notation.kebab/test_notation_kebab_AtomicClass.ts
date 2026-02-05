import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_notation_validateKebab_AtomicClass = (): void =>
  _test_notation_validateGeneral("AtomicClass")<AtomicClass>(AtomicClass)<
    typia.KebabCase<AtomicClass>
  >({
    convert: (input) => typia.notations.validateKebab<AtomicClass>(input),
    assert: typia.createAssert<typia.KebabCase<AtomicClass>>(),
  });
