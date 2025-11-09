import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_notation_createValidatePascal_NativeSimple = (): void =>
  _test_notation_validateGeneral("NativeSimple")<NativeSimple>(NativeSimple)<
    typia.PascalCase<NativeSimple>
  >({
    convert: typia.notations.createValidatePascal<NativeSimple>(),
    assert: typia.createAssert<typia.PascalCase<NativeSimple>>(),
  });
