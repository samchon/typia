import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_notation_createValidateKebab_ConstantAtomicSimple =
  (): void =>
    _test_notation_validateGeneral(
      "ConstantAtomicSimple",
    )<ConstantAtomicSimple>(ConstantAtomicSimple)<
      typia.KebabCase<ConstantAtomicSimple>
    >({
      convert: typia.notations.createValidateKebab<ConstantAtomicSimple>(),
      assert: typia.createAssert<typia.KebabCase<ConstantAtomicSimple>>(),
    });
