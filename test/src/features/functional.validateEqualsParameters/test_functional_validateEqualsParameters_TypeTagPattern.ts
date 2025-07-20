import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateEqualsParameters_TypeTagPattern =
  (): void =>
    _test_functional_validateEqualsParameters("TypeTagPattern")(TypeTagPattern)(
      (p: (input: TypeTagPattern) => TypeTagPattern) =>
        typia.functional.validateEqualsParameters(p),
    );
