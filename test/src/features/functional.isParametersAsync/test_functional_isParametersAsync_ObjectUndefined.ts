import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_isParametersAsync_ObjectUndefined =
  _test_functional_isParametersAsync("ObjectUndefined")(ObjectUndefined)(
    (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
      typia.functional.isParameters(p),
  );
