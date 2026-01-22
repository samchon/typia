import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_validateEqualsReturnAsync_ObjectHttpArray =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ObjectHttpArray")(
      ObjectHttpArray,
    )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
      typia.functional.validateEqualsReturn(p),
    );
