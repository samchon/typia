import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertEqualsReturnAsync_ObjectGenericArray =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "ObjectGenericArray",
    )(ObjectGenericArray)(
      (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
        typia.functional.assertEqualsReturn(p),
    );
