import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateEqualsReturnAsync_ObjectDescription =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ObjectDescription")(
      ObjectDescription,
    )((p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.validateEqualsReturn(p),
    );
