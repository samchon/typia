import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_notation_createValidateKebab_NativeUnion = (): void =>
  _test_notation_validateGeneral("NativeUnion")<NativeUnion>(NativeUnion)<
    typia.KebabCase<NativeUnion>
  >({
    convert: typia.notations.createValidateKebab<NativeUnion>(),
    assert: typia.createAssert<typia.KebabCase<NativeUnion>>(),
  });
