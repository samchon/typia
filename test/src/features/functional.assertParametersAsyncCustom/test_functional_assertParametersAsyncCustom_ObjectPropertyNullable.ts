import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_assertParametersAsyncCustom_ObjectPropertyNullable =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ObjectPropertyNullable",
  )(ObjectPropertyNullable)(
    (p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
