import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_notation_createValidateSnake_NativeAlias =
  _test_notation_validateGeneral("NativeAlias")<NativeAlias>(NativeAlias)<
    typia.SnakeCase<NativeAlias>
  >({
    convert: typia.notations.createValidateSnake<NativeAlias>(),
    assert: typia.createAssert<typia.SnakeCase<NativeAlias>>(),
  });
