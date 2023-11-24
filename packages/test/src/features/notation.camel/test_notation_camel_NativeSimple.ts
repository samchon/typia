import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_notation_validateCamel_NativeSimple =
  _test_notation_validateGeneral("NativeSimple")<NativeSimple>(NativeSimple)<
    typia.CamelCase<NativeSimple>
  >({
    convert: (input) => typia.notations.validateCamel<NativeSimple>(input),
    assert: typia.createAssert<typia.CamelCase<NativeSimple>>(),
  });
