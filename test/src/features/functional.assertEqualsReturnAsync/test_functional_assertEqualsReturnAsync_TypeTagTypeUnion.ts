import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_assertEqualsReturnAsync_TypeTagTypeUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "TypeTagTypeUnion",
    )(TypeTagTypeUnion)(
      (p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
        typia.functional.assertEqualsReturn(p),
    );
