import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectHttpArray =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.assertReturn(p),
  );
