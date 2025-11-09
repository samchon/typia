import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_notation_createValidateSnake_ConstantAtomicWrapper = (): void =>
    _test_notation_validateGeneral("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
        ConstantAtomicWrapper
  )<typia.SnakeCase<ConstantAtomicWrapper>>({
    convert: typia.notations.createValidateSnake<ConstantAtomicWrapper>(),
    assert: typia.createAssert<typia.SnakeCase<ConstantAtomicWrapper>>(),
  });
