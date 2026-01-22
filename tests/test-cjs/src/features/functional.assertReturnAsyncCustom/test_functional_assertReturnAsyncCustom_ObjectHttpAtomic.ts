import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_assertReturnAsyncCustom_ObjectHttpAtomic =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ObjectHttpAtomic")(
      ObjectHttpAtomic,
    )((p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
