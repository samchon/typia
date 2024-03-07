import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectHttpTypeTag =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectHttpTypeTag",
  )(ObjectHttpTypeTag)(
    (p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
