import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_validateParametersAsync_ObjectHttpConstant =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectHttpConstant")(
      ObjectHttpConstant,
    )((p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
      typia.functional.validateParameters(p),
    );
