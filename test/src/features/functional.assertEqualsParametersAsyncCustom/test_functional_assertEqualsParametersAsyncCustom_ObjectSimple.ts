import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectSimple =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ObjectSimple",
    )(ObjectSimple)((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
