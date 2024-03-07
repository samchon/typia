import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectHttpArray =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectHttpArray",
  )(ObjectHttpArray)(
    (p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
