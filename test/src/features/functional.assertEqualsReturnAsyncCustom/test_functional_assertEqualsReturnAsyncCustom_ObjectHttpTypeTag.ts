import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectHttpTypeTag =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ObjectHttpTypeTag",
  )(ObjectHttpTypeTag)(
    (p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
