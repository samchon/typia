import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectHttpAtomic =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectHttpAtomic",
  )(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
