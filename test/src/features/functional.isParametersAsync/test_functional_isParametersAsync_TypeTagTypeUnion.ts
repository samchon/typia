import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_isParametersAsync_TypeTagTypeUnion =
  (): Promise<void> =>
    _test_functional_isParametersAsync("TypeTagTypeUnion")(TypeTagTypeUnion)(
      (p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
        typia.functional.isParameters(p),
    );
