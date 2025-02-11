import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_assertEqualsParametersAsync_ObjectHttpAtomic =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectHttpAtomic",
  )(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.assertEqualsParameters(p),
  );
