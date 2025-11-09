import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_validateEqualsParameters_TypeTagTypeUnion =
  (): void =>
    _test_functional_validateEqualsParameters("TypeTagTypeUnion")(
      TypeTagTypeUnion,
    )((p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) =>
      typia.functional.validateEqualsParameters(p),
    );
