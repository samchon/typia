import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateParametersAsync_ObjectInternal =
  _test_functional_validateParametersAsync("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.validateParameters(p),
  );
