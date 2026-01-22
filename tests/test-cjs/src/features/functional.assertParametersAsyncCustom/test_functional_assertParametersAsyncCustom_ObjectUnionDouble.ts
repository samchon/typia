import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertParametersAsyncCustom_ObjectUnionDouble =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ObjectUnionDouble",
    )(ObjectUnionDouble)(
      (p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
