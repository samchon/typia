import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectHttpConstant =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ObjectHttpConstant",
    )(ObjectHttpConstant)(
      (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
