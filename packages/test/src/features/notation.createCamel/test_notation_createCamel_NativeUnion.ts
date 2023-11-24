import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_notation_createValidateCamel_NativeUnion =
  _test_notation_validateGeneral("NativeUnion")<NativeUnion>(NativeUnion)<
    typia.CamelCase<NativeUnion>
  >({
    convert: typia.notations.createValidateCamel<NativeUnion>(),
    assert: typia.createAssert<typia.CamelCase<NativeUnion>>(),
  });
