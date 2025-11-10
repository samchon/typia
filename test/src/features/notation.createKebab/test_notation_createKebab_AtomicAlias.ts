import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_notation_createValidateKebab_AtomicAlias = (): void =>
  _test_notation_validateGeneral("AtomicAlias")<AtomicAlias>(AtomicAlias)<
    typia.KebabCase<AtomicAlias>
  >({
    convert: typia.notations.createValidateKebab<AtomicAlias>(),
    assert: typia.createAssert<typia.KebabCase<AtomicAlias>>(),
  });
