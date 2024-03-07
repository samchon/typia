import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectHttpAtomic =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectHttpAtomic")(
    ObjectHttpAtomic,
  )((p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
    typia.functional.assertParameters(p),
  );
