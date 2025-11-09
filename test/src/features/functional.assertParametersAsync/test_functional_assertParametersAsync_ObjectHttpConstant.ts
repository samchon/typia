import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertParametersAsync_ObjectHttpConstant =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ObjectHttpConstant",
    )(ObjectHttpConstant)(
      (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
        typia.functional.assertParameters(p),
    );
