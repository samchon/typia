import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertReturnAsync_ObjectJsonTag =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.assertReturn(p),
  );
