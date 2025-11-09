import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_assertReturnAsync_ObjectHttpConstant =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ObjectHttpConstant")(
      ObjectHttpConstant,
    )((p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
      typia.functional.assertReturn(p),
    );
