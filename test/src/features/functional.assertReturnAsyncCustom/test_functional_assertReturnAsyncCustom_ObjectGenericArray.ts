import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertReturnAsyncCustom_ObjectGenericArray =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ObjectGenericArray")(
      ObjectGenericArray,
    )((p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
