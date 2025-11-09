import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectHttpAtomic = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ObjectHttpAtomic"
)(ObjectHttpAtomic)(
  (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)