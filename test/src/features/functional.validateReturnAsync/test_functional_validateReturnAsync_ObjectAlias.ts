import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateReturnAsync_ObjectAlias =
  _test_functional_validateReturnAsync("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      typia.functional.validateReturn(p),
  );
