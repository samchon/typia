import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_assertEqualsFunctionAsync_ObjectHttpAtomic =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectHttpAtomic",
    )(ObjectHttpAtomic)(
      (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
        typia.functional.assertEqualsFunction(p),
    );
