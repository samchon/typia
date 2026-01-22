import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagTuple =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "TypeTagTuple",
    )(TypeTagTuple)((p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
