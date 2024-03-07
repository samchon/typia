import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_equalsParametersAsync_TypeTagType =
  _test_functional_equalsParametersAsync("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => Promise<TypeTagType>) =>
      typia.functional.equalsParameters(p),
  );
