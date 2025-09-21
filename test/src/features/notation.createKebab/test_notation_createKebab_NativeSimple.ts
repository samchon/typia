import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_notation_createValidateKebab_NativeSimple = (): void =>
  _test_notation_validateGeneral("NativeSimple")<NativeSimple>(NativeSimple)<
    typia.KebabCase<NativeSimple>
  >({
    convert: typia.notations.createValidateKebab<NativeSimple>(),
    assert: typia.createAssert<typia.KebabCase<NativeSimple>>(),
  });
