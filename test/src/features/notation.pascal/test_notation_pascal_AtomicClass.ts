import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_notation_validatePascal_AtomicClass = (): void =>
    _test_notation_validateGeneral("AtomicClass")<AtomicClass>(
        AtomicClass
  )<typia.PascalCase<AtomicClass>>({
    convert: (input) => typia.notations.validatePascal<AtomicClass>(input),
    assert: typia.createAssert<typia.PascalCase<AtomicClass>>(),
  });
