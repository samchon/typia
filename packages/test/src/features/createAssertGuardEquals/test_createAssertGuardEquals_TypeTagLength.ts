import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createAssertGuardEquals_TypeTagLength =
  _test_assertGuardEquals("TypeTagLength")<TypeTagLength>(TypeTagLength)(
    typia.createAssertGuardEquals<TypeTagLength>(),
  );
