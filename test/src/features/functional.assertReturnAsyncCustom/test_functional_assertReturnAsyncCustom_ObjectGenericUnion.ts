import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_assertReturnAsyncCustom_ObjectGenericUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ObjectGenericUnion")(
      ObjectGenericUnion,
    )((p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
