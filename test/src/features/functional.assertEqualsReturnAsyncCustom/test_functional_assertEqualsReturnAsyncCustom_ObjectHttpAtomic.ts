import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectHttpAtomic =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ObjectHttpAtomic",
  )(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
