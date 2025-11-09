import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_notation_validatePascal_AtomicAlias = (): void =>
  _test_notation_validateGeneral("AtomicAlias")<AtomicAlias>(AtomicAlias)<
    typia.PascalCase<AtomicAlias>
  >({
    convert: (input) => typia.notations.validatePascal<AtomicAlias>(input),
    assert: typia.createAssert<typia.PascalCase<AtomicAlias>>(),
  });
