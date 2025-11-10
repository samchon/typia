import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_notation_createValidateKebab_ConstantAtomicWrapper =
  (): void =>
    _test_notation_validateGeneral(
      "ConstantAtomicWrapper",
    )<ConstantAtomicWrapper>(ConstantAtomicWrapper)<
      typia.KebabCase<ConstantAtomicWrapper>
    >({
      convert: typia.notations.createValidateKebab<ConstantAtomicWrapper>(),
      assert: typia.createAssert<typia.KebabCase<ConstantAtomicWrapper>>(),
    });
