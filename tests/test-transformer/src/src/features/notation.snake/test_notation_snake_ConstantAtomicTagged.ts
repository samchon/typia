import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_notation_validateSnake_ConstantAtomicTagged = (): void =>
    _test_notation_validateGeneral("ConstantAtomicTagged")<ConstantAtomicTagged>(
        ConstantAtomicTagged
  )<typia.SnakeCase<ConstantAtomicTagged>>({
    convert: (input) => typia.notations.validateSnake<ConstantAtomicTagged>(input),
    assert: typia.createAssert<typia.SnakeCase<ConstantAtomicTagged>>(),
  });
