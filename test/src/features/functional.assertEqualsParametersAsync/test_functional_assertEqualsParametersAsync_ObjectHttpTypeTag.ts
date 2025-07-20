import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_assertEqualsParametersAsync_ObjectHttpTypeTag =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ObjectHttpTypeTag",
    )(ObjectHttpTypeTag)(
      (p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
        typia.functional.assertEqualsParameters(p),
    );
