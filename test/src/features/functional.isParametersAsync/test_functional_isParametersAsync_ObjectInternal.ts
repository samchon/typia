import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_isParametersAsync_ObjectInternal =
  _test_functional_isParametersAsync("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.isParameters(p),
  );
