import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectHttpAtomic = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ObjectHttpAtomic"
)(ObjectHttpAtomic)(
  (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)