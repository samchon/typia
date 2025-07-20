import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_notation_createValidateCamel_AtomicClass = (): void =>
  _test_notation_validateGeneral("AtomicClass")<AtomicClass>(AtomicClass)<
    typia.CamelCase<AtomicClass>
  >({
    convert: typia.notations.createValidateCamel<AtomicClass>(),
    assert: typia.createAssert<typia.CamelCase<AtomicClass>>(),
  });
