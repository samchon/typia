import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_isReturnAsync_TypeTagTypeUnion =
  (): Promise<void> =>
    _test_functional_isReturnAsync("TypeTagTypeUnion")(TypeTagTypeUnion)(
      (p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
        typia.functional.isReturn(p),
    );
