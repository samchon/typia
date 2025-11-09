import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ObjectHttpAtomic = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ObjectHttpAtomic"
)(ObjectHttpAtomic)(
  (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)