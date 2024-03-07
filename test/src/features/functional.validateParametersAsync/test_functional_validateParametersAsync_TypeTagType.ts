import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateParametersAsync_TypeTagType =
  _test_functional_validateParametersAsync("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => Promise<TypeTagType>) =>
      typia.functional.validateParameters(p),
  );
