import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ObjectHttpAtomic =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "ObjectHttpAtomic",
  )(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.assertEqualsFunction(p),
  );
