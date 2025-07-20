import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_validateFunctionAsync_ObjectHttpAtomic =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ObjectHttpAtomic")(
      ObjectHttpAtomic,
    )((p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.validateFunction(p),
    );
