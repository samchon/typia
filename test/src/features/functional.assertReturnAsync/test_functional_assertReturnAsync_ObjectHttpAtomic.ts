import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectHttpAtomic =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectHttpAtomic")(
    ObjectHttpAtomic,
  )((p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
    typia.functional.assertReturn(p),
  );
