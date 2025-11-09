import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectJsonTag =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ObjectJsonTag",
    )(ObjectJsonTag)((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
