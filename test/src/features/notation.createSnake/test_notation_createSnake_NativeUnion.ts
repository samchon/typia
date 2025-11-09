import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_notation_createValidateSnake_NativeUnion = (): void =>
  _test_notation_validateGeneral("NativeUnion")<NativeUnion>(NativeUnion)<
    typia.SnakeCase<NativeUnion>
  >({
    convert: typia.notations.createValidateSnake<NativeUnion>(),
    assert: typia.createAssert<typia.SnakeCase<NativeUnion>>(),
  });
