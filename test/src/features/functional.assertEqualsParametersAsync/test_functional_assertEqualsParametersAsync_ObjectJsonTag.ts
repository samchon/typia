import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertEqualsParametersAsync_ObjectJsonTag =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ObjectJsonTag",
    )(ObjectJsonTag)((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
      typia.functional.assertEqualsParameters(p),
    );
