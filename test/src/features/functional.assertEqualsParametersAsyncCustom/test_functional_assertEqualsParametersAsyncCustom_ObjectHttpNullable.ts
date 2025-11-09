import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectHttpNullable =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ObjectHttpNullable",
    )(ObjectHttpNullable)(
      (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
