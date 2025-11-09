import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ObjectHttpAtomic = (): Promise<void> => _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "ObjectHttpAtomic"
)(ObjectHttpAtomic)(
  (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
    typia.functional.assertEqualsParameters(p),
)