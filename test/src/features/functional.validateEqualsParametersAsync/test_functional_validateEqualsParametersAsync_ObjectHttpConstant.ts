import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_validateEqualsParametersAsync_ObjectHttpConstant =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ObjectHttpConstant")(
      ObjectHttpConstant,
    )((p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
      typia.functional.validateEqualsParameters(p),
    );
