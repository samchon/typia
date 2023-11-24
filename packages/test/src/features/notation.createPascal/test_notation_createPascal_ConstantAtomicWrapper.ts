import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_notation_createValidatePascal_ConstantAtomicWrapper =
  _test_notation_validateGeneral(
    "ConstantAtomicWrapper",
  )<ConstantAtomicWrapper>(ConstantAtomicWrapper)<
    typia.PascalCase<ConstantAtomicWrapper>
  >({
    convert: typia.notations.createValidatePascal<ConstantAtomicWrapper>(),
    assert: typia.createAssert<typia.PascalCase<ConstantAtomicWrapper>>(),
  });
