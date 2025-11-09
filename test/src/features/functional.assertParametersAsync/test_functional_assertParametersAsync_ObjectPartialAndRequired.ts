import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertParametersAsync_ObjectPartialAndRequired =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ObjectPartialAndRequired",
    )(ObjectPartialAndRequired)(
      (
        p: (
          input: ObjectPartialAndRequired,
        ) => Promise<ObjectPartialAndRequired>,
      ) => typia.functional.assertParameters(p),
    );
