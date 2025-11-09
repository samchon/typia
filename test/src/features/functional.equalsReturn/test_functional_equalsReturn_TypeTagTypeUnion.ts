import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_equalsReturn_TypeTagTypeUnion = (): void =>
  _test_functional_equalsReturn("TypeTagTypeUnion")(TypeTagTypeUnion)(
    (p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) =>
      typia.functional.equalsReturn(p),
  );
