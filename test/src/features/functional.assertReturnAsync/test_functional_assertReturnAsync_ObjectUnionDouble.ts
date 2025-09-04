import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertReturnAsync_ObjectUnionDouble =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectUnionDouble")(
      ObjectUnionDouble,
    )((p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
      typia.functional.assertReturn(p),
    );
