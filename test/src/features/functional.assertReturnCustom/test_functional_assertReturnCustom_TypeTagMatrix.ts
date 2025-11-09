import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_TypeTagMatrix = (): void => _test_functional_assertReturn(CustomGuardError)(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => TypeTagMatrix) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)