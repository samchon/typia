import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_assertEqualsParametersAsync_TypeTagTypeUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "TypeTagTypeUnion",
    )(TypeTagTypeUnion)(
      (p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
        typia.functional.assertEqualsParameters(p),
    );
