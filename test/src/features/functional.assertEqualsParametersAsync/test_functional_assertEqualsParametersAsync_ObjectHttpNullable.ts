import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertEqualsParametersAsync_ObjectHttpNullable =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ObjectHttpNullable",
    )(ObjectHttpNullable)(
      (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
        typia.functional.assertEqualsParameters(p),
    );
