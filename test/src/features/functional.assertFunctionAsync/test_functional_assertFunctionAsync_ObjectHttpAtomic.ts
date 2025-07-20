import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_assertFunctionAsync_ObjectHttpAtomic =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ObjectHttpAtomic")(
      ObjectHttpAtomic,
    )((p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.assertFunction(p),
    );
