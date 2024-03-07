import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateEqualsReturnAsync_ObjectAlias =
  _test_functional_validateEqualsReturnAsync("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      typia.functional.validateEqualsReturn(p),
  );
