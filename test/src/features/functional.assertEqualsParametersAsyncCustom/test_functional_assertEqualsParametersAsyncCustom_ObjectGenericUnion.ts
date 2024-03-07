import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectGenericUnion =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectGenericUnion",
  )(ObjectGenericUnion)(
    (p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
