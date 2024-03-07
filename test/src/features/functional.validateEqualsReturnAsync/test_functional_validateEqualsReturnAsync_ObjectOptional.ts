import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateEqualsReturnAsync_ObjectOptional =
  _test_functional_validateEqualsReturnAsync("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
      typia.functional.validateEqualsReturn(p),
  );
