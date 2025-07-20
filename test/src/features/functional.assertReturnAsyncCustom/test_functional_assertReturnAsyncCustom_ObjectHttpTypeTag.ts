import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_assertReturnAsyncCustom_ObjectHttpTypeTag =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ObjectHttpTypeTag")(
      ObjectHttpTypeTag,
    )((p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
