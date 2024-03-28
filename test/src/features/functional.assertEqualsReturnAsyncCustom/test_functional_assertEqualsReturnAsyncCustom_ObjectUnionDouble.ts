import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectUnionDouble =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ObjectUnionDouble",
  )(ObjectUnionDouble)(
    (p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
