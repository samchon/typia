import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_notation_createValidatePascal_AtomicClass = (): void =>
    _test_notation_validateGeneral("AtomicClass")<AtomicClass>(
        AtomicClass
  )<typia.PascalCase<AtomicClass>>({
    convert: typia.notations.createValidatePascal<AtomicClass>(),
    assert: typia.createAssert<typia.PascalCase<AtomicClass>>(),
  });
