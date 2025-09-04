import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateFunction_TypeTagType = (): void =>
  _test_functional_validateFunction("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) =>
      typia.functional.validateFunction(p),
  );
