import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectGenericArray =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ObjectGenericArray",
  )(ObjectGenericArray)(
    (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
