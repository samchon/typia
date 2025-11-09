import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_notation_createValidateCamel_ConstantAtomicTagged =
  (): void =>
    _test_notation_validateGeneral(
      "ConstantAtomicTagged",
    )<ConstantAtomicTagged>(ConstantAtomicTagged)<
      typia.CamelCase<ConstantAtomicTagged>
    >({
      convert: typia.notations.createValidateCamel<ConstantAtomicTagged>(),
      assert: typia.createAssert<typia.CamelCase<ConstantAtomicTagged>>(),
    });
