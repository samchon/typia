import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertParametersAsyncCustom_ObjectHttpArray =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ObjectHttpArray")(
      ObjectHttpArray,
    )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
