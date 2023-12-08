import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createAssertGuardEquals_TypeTagMatrix =
  _test_assertGuardEquals("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
    typia.createAssertGuardEquals<TypeTagMatrix>(),
  );
