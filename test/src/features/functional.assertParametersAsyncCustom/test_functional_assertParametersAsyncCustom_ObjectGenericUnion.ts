import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertParametersAsyncCustom_ObjectGenericUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ObjectGenericUnion",
    )(ObjectGenericUnion)(
      (p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
