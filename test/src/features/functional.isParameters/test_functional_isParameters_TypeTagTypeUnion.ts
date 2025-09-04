import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_isParameters_TypeTagTypeUnion = (): void =>
  _test_functional_isParameters("TypeTagTypeUnion")(TypeTagTypeUnion)(
    (p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) =>
      typia.functional.isParameters(p),
  );
