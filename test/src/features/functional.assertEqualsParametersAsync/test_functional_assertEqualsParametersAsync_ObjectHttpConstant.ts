import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertEqualsParametersAsync_ObjectHttpConstant =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ObjectHttpConstant",
    )(ObjectHttpConstant)(
      (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
        typia.functional.assertEqualsParameters(p),
    );
