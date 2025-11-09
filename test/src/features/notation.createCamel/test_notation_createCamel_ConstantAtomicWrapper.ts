import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_notation_createValidateCamel_ConstantAtomicWrapper = (): void =>
    _test_notation_validateGeneral("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
        ConstantAtomicWrapper
  )<typia.CamelCase<ConstantAtomicWrapper>>({
    convert: typia.notations.createValidateCamel<ConstantAtomicWrapper>(),
    assert: typia.createAssert<typia.CamelCase<ConstantAtomicWrapper>>(),
  });
