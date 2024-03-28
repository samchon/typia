import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertReturnAsync_ObjectHttpArray =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.assertReturn(p),
  );
