import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_assertReturnAsync_ObjectHttpAtomic =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectHttpAtomic")(
      ObjectHttpAtomic,
    )((p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.assertReturn(p),
    );
