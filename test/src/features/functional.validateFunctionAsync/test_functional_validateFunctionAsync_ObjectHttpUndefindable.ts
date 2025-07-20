import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_validateFunctionAsync_ObjectHttpUndefindable =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ObjectHttpUndefindable")(
      ObjectHttpUndefindable,
    )((p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
      typia.functional.validateFunction(p),
    );
