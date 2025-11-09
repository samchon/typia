import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertParametersAsync_ObjectUnionDouble =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ObjectUnionDouble")(
      ObjectUnionDouble,
    )((p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
      typia.functional.assertParameters(p),
    );
