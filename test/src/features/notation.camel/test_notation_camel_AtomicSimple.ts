import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_notation_validateCamel_AtomicSimple = (): void =>
  _test_notation_validateGeneral("AtomicSimple")<AtomicSimple>(AtomicSimple)<
    typia.CamelCase<AtomicSimple>
  >({
    convert: (input) => typia.notations.validateCamel<AtomicSimple>(input),
    assert: typia.createAssert<typia.CamelCase<AtomicSimple>>(),
  });
