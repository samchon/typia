import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_equalsReturnAsync_TypeTagTypeUnion =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("TypeTagTypeUnion")(TypeTagTypeUnion)(
      (p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
        typia.functional.equalsReturn(p),
    );
