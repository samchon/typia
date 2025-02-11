import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertEqualsReturnAsync_ObjectHttpConstant =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ObjectHttpConstant",
  )(ObjectHttpConstant)(
    (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
      typia.functional.assertEqualsReturn(p),
  );
