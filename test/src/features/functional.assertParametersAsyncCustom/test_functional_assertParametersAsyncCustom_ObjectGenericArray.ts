import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertParametersAsyncCustom_ObjectGenericArray =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ObjectGenericArray",
    )(ObjectGenericArray)(
      (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
