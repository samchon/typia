import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectJsonTag =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
