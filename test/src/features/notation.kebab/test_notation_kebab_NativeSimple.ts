import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_notation_validateKebab_NativeSimple = (): void =>
  _test_notation_validateGeneral("NativeSimple")<NativeSimple>(NativeSimple)<
    typia.KebabCase<NativeSimple>
  >({
    convert: (input) => typia.notations.validateKebab<NativeSimple>(input),
    assert: typia.createAssert<typia.KebabCase<NativeSimple>>(),
  });
