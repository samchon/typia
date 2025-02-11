import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertReturnAsyncCustom_ObjectHttpArray =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
