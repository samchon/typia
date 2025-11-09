import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertParametersAsyncCustom_ObjectHttpNullable =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ObjectHttpNullable",
    )(ObjectHttpNullable)(
      (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
