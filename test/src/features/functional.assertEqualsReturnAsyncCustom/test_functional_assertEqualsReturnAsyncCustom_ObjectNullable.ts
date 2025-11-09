import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectNullable =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ObjectNullable",
    )(ObjectNullable)((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
