import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_notation_validateKebab_AtomicSimple = (): void =>
  _test_notation_validateGeneral("AtomicSimple")<AtomicSimple>(AtomicSimple)<
    typia.KebabCase<AtomicSimple>
  >({
    convert: (input) => typia.notations.validateKebab<AtomicSimple>(input),
    assert: typia.createAssert<typia.KebabCase<AtomicSimple>>(),
  });
