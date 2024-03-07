import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectHttpNullable =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ObjectHttpNullable",
  )(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
