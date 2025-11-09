import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_equalsParametersAsync_TypeTagTypeUnion =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("TypeTagTypeUnion")(
      TypeTagTypeUnion,
    )((p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
      typia.functional.equalsParameters(p),
    );
