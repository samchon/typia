import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_notation_validateCamel_ConstantAtomicWrapper = (): void =>
    _test_notation_validateGeneral("ConstantAtomicWrapper")<ConstantAtomicWrapper>(
        ConstantAtomicWrapper
  )<typia.CamelCase<ConstantAtomicWrapper>>({
    convert: (input) => typia.notations.validateCamel<ConstantAtomicWrapper>(input),
    assert: typia.createAssert<typia.CamelCase<ConstantAtomicWrapper>>(),
  });
