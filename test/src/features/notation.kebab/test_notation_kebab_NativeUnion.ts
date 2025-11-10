import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_notation_validateKebab_NativeUnion = (): void =>
  _test_notation_validateGeneral("NativeUnion")<NativeUnion>(NativeUnion)<
    typia.KebabCase<NativeUnion>
  >({
    convert: (input) => typia.notations.validateKebab<NativeUnion>(input),
    assert: typia.createAssert<typia.KebabCase<NativeUnion>>(),
  });
