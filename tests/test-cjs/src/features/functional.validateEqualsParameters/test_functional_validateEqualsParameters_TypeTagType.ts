import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateEqualsParameters_TypeTagType = (): void =>
  _test_functional_validateEqualsParameters("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) =>
      typia.functional.validateEqualsParameters(p),
  );
