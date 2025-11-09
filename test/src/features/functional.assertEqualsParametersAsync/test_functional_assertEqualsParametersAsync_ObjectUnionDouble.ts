import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertEqualsParametersAsync_ObjectUnionDouble =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ObjectUnionDouble",
    )(ObjectUnionDouble)(
      (p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
        typia.functional.assertEqualsParameters(p),
    );
