import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_validateEqualsParameters_TypeTagObjectUnion =
  (): void =>
    _test_functional_validateEqualsParameters("TypeTagObjectUnion")(
      TypeTagObjectUnion,
    )((p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
      typia.functional.validateEqualsParameters(p),
    );
