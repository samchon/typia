import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateFunctionAsync_ObjectUndefined =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ObjectUndefined")(ObjectUndefined)(
      (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
        typia.functional.validateFunction(p),
    );
