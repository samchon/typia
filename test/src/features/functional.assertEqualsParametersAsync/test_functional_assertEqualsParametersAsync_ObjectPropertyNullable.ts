import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_assertEqualsParametersAsync_ObjectPropertyNullable =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ObjectPropertyNullable",
    )(ObjectPropertyNullable)(
      (p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
        typia.functional.assertEqualsParameters(p),
    );
