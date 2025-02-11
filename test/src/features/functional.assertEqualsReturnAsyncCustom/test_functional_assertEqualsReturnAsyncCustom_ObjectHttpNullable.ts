import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectHttpNullable =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ObjectHttpNullable",
  )(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
