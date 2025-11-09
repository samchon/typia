import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectHttpUndefindable = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ObjectHttpUndefindable"
)(ObjectHttpUndefindable)(
  (p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)