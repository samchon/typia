import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectHttpConstant =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectHttpConstant",
  )(ObjectHttpConstant)(
    (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
