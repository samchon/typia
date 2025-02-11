import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertReturnAsyncCustom_ObjectUnionDouble =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
