import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_assertParametersAsync_ObjectPropertyNullable =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ObjectPropertyNullable",
    )(ObjectPropertyNullable)(
      (p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
        typia.functional.assertParameters(p),
    );
