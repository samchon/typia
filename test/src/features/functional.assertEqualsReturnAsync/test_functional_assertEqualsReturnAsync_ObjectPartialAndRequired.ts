import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_assertEqualsReturnAsync_ObjectPartialAndRequired =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "ObjectPartialAndRequired",
    )(ObjectPartialAndRequired)(
      (
        p: (
          input: ObjectPartialAndRequired,
        ) => Promise<ObjectPartialAndRequired>,
      ) => typia.functional.assertEqualsReturn(p),
    );
