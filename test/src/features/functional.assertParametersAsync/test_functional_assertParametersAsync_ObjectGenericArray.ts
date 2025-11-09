import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertParametersAsync_ObjectGenericArray =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ObjectGenericArray",
    )(ObjectGenericArray)(
      (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
        typia.functional.assertParameters(p),
    );
