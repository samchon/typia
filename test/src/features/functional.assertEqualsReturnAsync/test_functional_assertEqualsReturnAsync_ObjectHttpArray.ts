import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ObjectHttpArray =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.assertEqualsReturn(p),
  );
