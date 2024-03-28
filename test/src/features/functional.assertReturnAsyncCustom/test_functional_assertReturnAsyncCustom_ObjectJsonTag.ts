import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertReturnAsyncCustom_ObjectJsonTag =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
