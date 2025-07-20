import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_validateEqualsParametersAsync_ObjectJsonTag =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ObjectJsonTag")(
      ObjectJsonTag,
    )((p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
      typia.functional.validateEqualsParameters(p),
    );
