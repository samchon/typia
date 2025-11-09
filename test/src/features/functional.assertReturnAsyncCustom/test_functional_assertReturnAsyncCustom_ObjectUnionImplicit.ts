import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertReturnAsyncCustom_ObjectUnionImplicit =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ObjectUnionImplicit")(
      ObjectUnionImplicit,
    )((p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
