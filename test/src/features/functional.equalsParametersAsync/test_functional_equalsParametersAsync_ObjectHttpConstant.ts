import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_equalsParametersAsync_ObjectHttpConstant =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ObjectHttpConstant")(
      ObjectHttpConstant,
    )((p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
      typia.functional.equalsParameters(p),
    );
