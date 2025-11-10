import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_notation_validateKebab_ConstantAtomicWrapper = (): void =>
  _test_notation_validateGeneral(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)<
    typia.KebabCase<ConstantAtomicWrapper>
  >({
    convert: (input) =>
      typia.notations.validateKebab<ConstantAtomicWrapper>(input),
    assert: typia.createAssert<typia.KebabCase<ConstantAtomicWrapper>>(),
  });
