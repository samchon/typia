import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertReturnAsyncCustom_TypeTagObjectUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TypeTagObjectUnion")(
      TypeTagObjectUnion,
    )((p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
