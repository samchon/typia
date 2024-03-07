import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_isReturnAsync_ObjectAlias =
  _test_functional_isReturnAsync("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      typia.functional.isReturn(p),
  );
