import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_notation_createValidateCamel_AtomicAlias = (): void =>
    _test_notation_validateGeneral("AtomicAlias")<AtomicAlias>(
        AtomicAlias
  )<typia.CamelCase<AtomicAlias>>({
    convert: typia.notations.createValidateCamel<AtomicAlias>(),
    assert: typia.createAssert<typia.CamelCase<AtomicAlias>>(),
  });
