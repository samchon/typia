import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSimple } from "../../structures/ObjectSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectSimple = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => ObjectSimple) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)