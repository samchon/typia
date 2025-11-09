import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_TypeTagDefault = (): void => _test_functional_assertReturn(CustomGuardError)(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => TypeTagDefault) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)