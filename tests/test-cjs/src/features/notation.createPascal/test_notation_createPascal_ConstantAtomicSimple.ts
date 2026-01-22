import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_notation_createValidatePascal_ConstantAtomicSimple =
  (): void =>
    _test_notation_validateGeneral(
      "ConstantAtomicSimple",
    )<ConstantAtomicSimple>(ConstantAtomicSimple)<
      typia.PascalCase<ConstantAtomicSimple>
    >({
      convert: typia.notations.createValidatePascal<ConstantAtomicSimple>(),
      assert: typia.createAssert<typia.PascalCase<ConstantAtomicSimple>>(),
    });
