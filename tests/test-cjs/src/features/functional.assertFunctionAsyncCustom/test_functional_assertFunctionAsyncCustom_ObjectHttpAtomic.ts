import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_assertFunctionAsyncCustom_ObjectHttpAtomic =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("ObjectHttpAtomic")(
      ObjectHttpAtomic,
    )((p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
