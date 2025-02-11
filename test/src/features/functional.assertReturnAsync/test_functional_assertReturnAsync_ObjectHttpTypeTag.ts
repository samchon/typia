import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_assertReturnAsync_ObjectHttpTypeTag =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectHttpTypeTag")(
    ObjectHttpTypeTag,
  )((p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
    typia.functional.assertReturn(p),
  );
