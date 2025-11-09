import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_validateEqualsReturnAsync_ObjectHttpConstant =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ObjectHttpConstant")(
      ObjectHttpConstant,
    )((p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
      typia.functional.validateEqualsReturn(p),
    );
