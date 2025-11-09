import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_functional_validateEqualsParameters_DynamicConstant =
  (): void =>
    _test_functional_validateEqualsParameters("DynamicConstant")(
      DynamicConstant,
    )((p: (input: DynamicConstant) => DynamicConstant) =>
      typia.functional.validateEqualsParameters(p),
    );
