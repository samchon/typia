import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateEqualsParameters_TypeTagCustom =
  _test_functional_validateEqualsParameters("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => TypeTagCustom) =>
      typia.functional.validateEqualsParameters(p),
  );
