import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_notation_validatePascal_AtomicSimple =
  _test_notation_validateGeneral("AtomicSimple")<AtomicSimple>(AtomicSimple)<
    typia.PascalCase<AtomicSimple>
  >({
    convert: (input) => typia.notations.validatePascal<AtomicSimple>(input),
    assert: typia.createAssert<typia.PascalCase<AtomicSimple>>(),
  });
