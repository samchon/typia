import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectHttpAtomic =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectHttpAtomic",
  )(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
