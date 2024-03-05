import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_isReturn_TypeTagTypeUnion =
  _test_functional_isReturn("TypeTagTypeUnion")(TypeTagTypeUnion)(
    (p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) =>
      typia.functional.isReturn(p),
  );
